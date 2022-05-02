import { readFileSync } from "node:fs";

import { JWKInterface } from "arweave/node/lib/wallet";
import { Contract } from "redstone-smartweave";

import { deployContract, smartweave } from "@/utils";

type ContractState = {
    ping: boolean;
};

type ContractAction = {
    input: "ping" | "pong";
};

async function interact(contract: Contract<ContractState>, ping: boolean): Promise<string> {
    return (
        await contract.bundleInteraction<ContractAction>(
            { input: ping ? "ping" : "pong" },
            undefined,
            true,
        )
    ).originalTxId;
}

async function init(contract: Contract<ContractState>) {
    const { state, validity } = await contract.readState();

    if (state.ping) {
        await interact(contract, !state.ping);
    }
}

export async function runPingContractTest(contractId: string, walletPath: string) {
    const wallet: JWKInterface = JSON.parse(readFileSync(walletPath).toString());
    const wallet2: JWKInterface = JSON.parse(
        readFileSync("./data/pianityAccount2Wallet.json").toString(),
    );

    const contract = smartweave.contract<ContractState>(contractId);

    await init(contract);

    let ping = false;

    for (let i = 0; i < 1000; i++) {
        if (ping) {
            contract.connect(wallet);
        } else {
            contract.connect(wallet2);
        }
        console.log(`########## round ${i} ##########`);

        console.log(!ping ? "ping" : "pong", await interact(contract, ping));

        ping = !ping;
    }
}

export async function deployPingContract(walletPath: string) {
    const contractSource = readFileSync("./data/pingContract.js").toString();
    const initialState: ContractState = {
        ping: false,
    };

    const wallet: JWKInterface = JSON.parse(readFileSync(walletPath).toString());

    const contractId = await deployContract(wallet, contractSource, initialState);

    console.log("contract id:", contractId);
}
