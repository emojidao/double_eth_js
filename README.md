# double_js
A JavaScript library for double. With double_eth,you can easily get the info of doNFT,Duration,tokens of owner,etc...

Published on [GitHub](https://github.com/emojidao/double_eth) and [npm](https://www.npmjs.com/package/double_eth)

## Installation
We recommend switching to Node.js version 14.15.0 to make sure common crypto dependencies work. Execute `nvm use`, if you have Node Version Manager.

Then, in your project, run:

```bash
npm install --save double_eth
```

Install [web3](https://github.com/ethereum/web3.js) too if you haven't already.

If you run into an error while building the dependencies and you're on a Mac, run this:

```bash
xcode-select --install # Install Command Line Tools if you haven't already.
sudo xcode-select --switch /Library/Developer/CommandLineTools # Enable command line tools
sudo npm explore npm -g -- npm install node-gyp@latest # (Optional) update node-gyp
```
## Getting Started
you can get more here : "./test/test.ts"
```JavaScript
import { Double } from "../src/double";
var contract = new web3.eth.Contract(DONFT_ABI, DONFT_LAND);
let landId = "340282366920938463463374607431768211458";
let tokenId = 2;
let durationId = 2;
let duration;

let info = await Double.getDoNftInfo(contract, tokenId);
console.log("info", info);

duration = await Double.getDuration(contract, durationId);
console.log("duration", duration);

duration = await Double.getDurationByIndex(contract, tokenId, 0);
console.log("duration", duration);

let durationIds = await Double.getDurationIdList(contract, tokenId);
console.log("getDurationIdList:", durationIds);

let originalAddress = await Double.getOriginalNftAddress(contract);
console.log("getOriginalNftAddress:", originalAddress);

let oid = await Double.getOriginalNftId(contract, tokenId);
console.log("getOriginalNftId:", oid);

let walletAddress = "0xfB7ff746A0aeBDE0012813565FC3Fb8281f23E01";
let tokenIds = await Double.getTokensOfOwner(contract, walletAddress, 0, 0);
console.log("getTokensOfOwner:", tokenIds);

let user = await Double.getUser(contract, tokenId);
console.log("getUser:", user);

let vNftId = await Double.getVNftId(contract, landId);
console.log("getVNftId:", vNftId);

let mNftId = await Double.getWNftId(contract, landId);
console.log("getWNftId:", mNftId);

let isValid = await Double.isOriginalValidNow(contract, landId);
console.log("isOriginalValidNow:", isValid);

```
In a browser with web3 or an extension like [MetaMask](https://metamask.io/) or [Dapper](http://www.meetdapper.com/), you can use `window.ethereum` (or `window.web3.currentProvider` for legacy mobile web3 browsers) to access the native provider.
License
-------

MIT License (including **all** dependencies).

