import { readFileSync } from "node:fs";

import { JWKInterface } from "arweave/node/lib/wallet";
import { Contract, LoggerFactory, sleep } from "redstone-smartweave";

import { Input, State } from "pianity-smartcontracts";

import { arweave, deployContract, smartweave } from "@/utils";

LoggerFactory.INST.setOptions({
    type: "json",
    minLevel: "error",
});

async function transfer(
    contract: Contract<State>,
    from: JWKInterface,
    to: string,
): Promise<string> {
    contract.connect(from);

    return (
        await contract.bundleInteraction<Input>(
            { function: "transfer", tokenId: "DOL", target: to, qty: "1" },
            undefined,
            true,
        )
    ).originalTxId;
}

async function init(
    contract: Contract<State>,
    account1Wallet: JWKInterface,
    account1Address: string,
    account2Wallet: JWKInterface,
    account2Address: string,
) {
    const { state } = await contract.readState();

    if (
        state.tokens.DOL.balances[account1Address] !== "1" &&
        state.tokens.DOL.balances[account2Address] !== "1"
    ) {
        throw new Error("Accounts balance are not configured correctly");
    }

    if (state.tokens.DOL.balances[account2Address] === "1") {
        await transfer(contract, account2Wallet, account1Address);
    }
}

export async function runPianityContractTest(
    contractId: string,
    account1Path: string,
    account2Path: string,
) {
    const account1Wallet: JWKInterface = JSON.parse(readFileSync(account1Path).toString());
    const account1Address = await arweave.wallets.jwkToAddress(account1Wallet);

    const account2Wallet: JWKInterface = JSON.parse(readFileSync(account2Path).toString());
    const account2Address = await arweave.wallets.jwkToAddress(account2Wallet);

    const contract = smartweave.contract<State>(contractId);

    await init(contract, account1Wallet, account1Address, account2Wallet, account2Address);

    for (let i = 0; i < 1000; i++) {
        console.log(`########## round ${i} ##########`);

        console.log(
            "transfered to account B",
            await transfer(contract, account1Wallet, account2Address),
        );

        console.log(
            "transfered to account A",
            await transfer(contract, account2Wallet, account1Address),
        );
    }
}

export async function deployPianityContract(walletPath: string, account1Path: string) {
    const account1Wallet: JWKInterface = JSON.parse(readFileSync(account1Path).toString());
    const account1Address = await arweave.wallets.jwkToAddress(account1Wallet);

    const contractSource = readFileSync("./data/pianityContract.js").toString();
    const initialState: State = {
        name: "test",
        nonce: 0,
        settings: {
            allowFreeTransfer: false,
            paused: false,
            communityChest: "random-address",
            contractOwners: [],
            contractSuperOwners: [],
            settingsOwnersPermissions: [],
            foreignContracts: [],
            lockMinLength: 0,
            lockMaxLength: 100,
        },
        vaults: {},
        tokens: {
            DOL: {
                ticker: "DOL",
                balances: { [account1Address]: "1" },
            },
        },
        operatorApprovals: {},
        invocations: [],
    };

    const wallet: JWKInterface = JSON.parse(readFileSync(walletPath).toString());

    const contractId = await deployContract(wallet, contractSource, initialState);

    console.log("contract id:", contractId);
}
