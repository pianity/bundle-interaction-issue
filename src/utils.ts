import Arweave from "arweave";
import { JWKInterface } from "arweave/node/lib/wallet";
import { LoggerFactory, SmartWeaveNodeFactory } from "redstone-smartweave";

LoggerFactory.INST.setOptions({
    type: "json",
    minLevel: "error",
});

export const arweave = Arweave.init({ host: "arweave.net", port: 443, protocol: "https" });
export const smartweave = SmartWeaveNodeFactory.memCachedBased(arweave)
    .useRedStoneGateway()
    .build();

export async function deployContract<STATE>(
    wallet: JWKInterface,
    contractSource: string,
    initialState: STATE,
): Promise<string> {
    const contractSourceTx = await arweave.createTransaction({ data: contractSource }, wallet);
    contractSourceTx.addTag("App-Name", "SmartWeaveContractSource");
    contractSourceTx.addTag("App-Version", "0.3.0");
    contractSourceTx.addTag("Content-Type", "application/javascript");

    // Sign
    await arweave.transactions.sign(contractSourceTx, wallet);
    // Let's keep the ID, it will be used in the state transaction.
    const contractSourceTxId = contractSourceTx.id;
    // Deploy the contract source
    await arweave.transactions.post(contractSourceTx);

    // Now, let's create the Initial State transaction
    const contractTx = await arweave.createTransaction(
        { data: JSON.stringify(initialState) },
        wallet,
    );
    contractTx.addTag("App-Name", "SmartWeaveContract");
    contractTx.addTag("App-Version", "0.3.0");
    contractTx.addTag("Contract-Src", contractSourceTxId);
    contractTx.addTag("Content-Type", "application/json");

    // Sign
    await arweave.transactions.sign(contractTx, wallet);
    const contractTxId = contractTx.id;
    // Deploy
    await arweave.transactions.post(contractTx);

    return contractTxId;
}

export function sleep(seconds: number) {
    return new Promise<void>((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
