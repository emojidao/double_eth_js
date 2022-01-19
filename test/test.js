"use strict";
exports.__esModule = true;
var web3_min_js_1 = require("web3/dist/web3.min.js");
var double_1 = require("../src/double");
var bsct_url = "https://data-seed-prebsc-1-s1.binance.org:8545";
//@ts-ignore
var web3 = new web3_min_js_1["default"](new web3_min_js_1["default"].providers.HttpProvider(bsct_url));
console.log(web3);
//@ts-ignore
var contract = new web3.eth.Contract(abi, address);
var info = double_1.Double.getDoNftInfo(contract, 2);
console.log("info", info);
