# <https://github.com/redstone-finance/redstone-smartcontracts/issues/137>

This repo tries to reproduce the issue explained at
[#137](https://github.com/redstone-finance/redstone-smartcontracts/issues/137) using Pianity's
smartcontract - for which the issue is easily reproducible - and another minimal contract - for
which the issue isn't appearing.

`src/index.ts` is preconfigured to run using pre-deployed contracts and pre-generated wallets for
ease use, although both test cases include a deploy function to easily create a new environment and
the test cases are function for which you can provide custom wallets by giving their paths.

Note: all default arweave wallets included in this repo are empty.

# 1. Pianity Contract Test Case

The build of the contract is located at `data/pianityContract.js` and its sources are available
at
<https://github.com/pianity/pianity-smartcontracts/tree/c1410a4bf6b402932d5c55e5a7f9ca06b595d93d>.
And the default wallets are located at `data/pianityAccount1Wallet.json` and
`data/pianityAccount2Wallet.json`.

This contract is inspired by ERC1155, and is the one we currently use at Pianity. In order to
reproduce the issue, the state of this contract includes a token "DOL" for which either of the
wallet has a balance of `1`. Account 1 will transfer 1 DOL to account 2 and vice versa in a loop,
until the call to `bundleInteraction` throws or when we reach 1000 iteration. It usually throws
before 20 iterations.

This being the default test case, you can run `yarn start` to launch it now.

# 2. Ping Contract Test Case

Located at `data/pingContract.js`, this is an extremely simple contract that contains as its state
a boolean field `ping` and only two possible interactions:

- `ping`: throws when `state.ping` is true, otherwise sets it to true
- `pong`: throws when `state.ping` is false, otherwise sets it to false

In the same fashion as for the first test case, the test is a loop where we send an interaction in
a loop, first `ping` then `pong`, until `bundleInteraction` throws or we reach 1000 iterations.
However, contrarily to the first test case, no throwing has been observed.

To run this test case, uncomment the call to `runPingContractTest` and comment the one to `runPianityContractTest` then run `yarn start`.
