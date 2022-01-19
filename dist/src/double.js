"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Double = void 0;
class Double {
    static getDuration(contract, durationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let start_end = yield contract.methods.getDuration(durationId).call();
            return start_end;
        });
    }
    static getDoNftInfo(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let info = yield contract.methods.getDoNftInfo(tokenId).call();
            return info;
        });
    }
    static getDurationIdList(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let ids = yield contract.methods.getDurationIdList(tokenId).call();
            return ids;
        });
    }
    static getDurationListLength(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let length = yield contract.methods.getDurationListLength(tokenId).call();
            return length;
        });
    }
    static getDurationByIndex(contract, tokenId, index) {
        return __awaiter(this, void 0, void 0, function* () {
            let start_end = yield contract.methods.getDurationByIndex(tokenId, index).call();
            return start_end;
        });
    }
    static getVNftId(contract, originalNftId) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = yield contract.methods.getXNftId(originalNftId).call();
            return id;
        });
    }
    static getWNftId(contract, originalNftId) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = yield contract.methods.getXNftId(originalNftId).call();
            return id;
        });
    }
    static isVNft(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield contract.methods.isXNft(tokenId).call();
            return bool;
        });
    }
    static isWNft(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield contract.methods.isXNft(tokenId).call();
            return bool;
        });
    }
    static isValidNow(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield contract.methods.isValidNow(tokenId).call();
            return bool;
        });
    }
    static getOriginalNftAddress(contract) {
        return __awaiter(this, void 0, void 0, function* () {
            let bool = yield contract.methods.getOriginalNftAddress().call();
            return bool;
        });
    }
    static getOriginalNftId(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = yield contract.methods.getOriginalNftId(tokenId).call();
            return id;
        });
    }
    static getUser(contract, tokenId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield contract.methods.getUser(tokenId).call();
            return user;
        });
    }
    static getTokensOfOwner(contract, address, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            let ids = [];
            let balance = yield contract.methods.balanceOf(address).call();
            if (from >= balance)
                return ids;
            if (to <= 0 || to > balance) {
                to = balance;
            }
            for (let index = from; index < balance; index++) {
                let id = yield contract.methods.tokenOfOwnerByIndex(address, index).call();
                ids.push(id);
            }
            return ids;
        });
    }
    static isOriginalValidNow(contract, originalNftId) {
        return __awaiter(this, void 0, void 0, function* () {
            let tokenId = yield contract.methods.getXNftId(originalNftId).call();
            if (tokenId == 0)
                return true;
            let bool = yield contract.methods.isValidNow(tokenId).call();
            return bool;
        });
    }
}
exports.Double = Double;
