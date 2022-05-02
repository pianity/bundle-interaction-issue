import { deployPianityContract, runPianityContractTest } from "@/pianityContractTest";
import { deployPingContract, runPingContractTest } from "@/pingContractTest";

const PIANITY_CONTRACT_ID = "wsYbL3A9OCogHED92j401xOXd-lhFeKJsw4ALw8926M";
const PIANITY_ACCOUNT1_PATH = "./data/pianityAccount1Wallet.json";
const PIANITY_ACCOUNT2_PATH = "./data/pianityAccount2Wallet.json";

const PING_CONTRACT_ID = "2Hw1QJjAjpKTcf_kFApIdToHuRWRnIVwoH2-CT1Qonw";
const PING_WALLET_PATH = "./data/pingWallet.json";

(async () => {
    await runPianityContractTest(PIANITY_CONTRACT_ID, PIANITY_ACCOUNT1_PATH, PIANITY_ACCOUNT2_PATH);

    // await runPingContractTest(PING_CONTRACT_ID, PING_WALLET_PATH);

    // await deployPianityContract("[...].json", PIANITY_ACCOUNT1_PATH);

    // await deployPingContract("[...].json");
})();
