"use strict";

export class Double {

    public static async getDuration(contract:any,durationId:any): Promise<any> {
        let start_end = await contract.methods.getDuration(durationId).call();
        return start_end;
    }

    public static async getDoNftInfo(contract:any,tokenId:any): Promise<any> {
        let info = await contract.methods.getDoNftInfo(tokenId).call();
        return info;
    }

    public static async getDurationIdList(contract:any,tokenId:any): Promise<any> {
        let ids = await contract.methods.getDurationIdList(tokenId).call();
        return ids;
    }

    public static async getDurationListLength(contract:any,tokenId:any): Promise<any> {
        let length = await contract.methods.getDurationListLength(tokenId).call();
        return length;
    }
    public static async getDurationByIndex(contract:any,tokenId:any, index: number): Promise<any> {
        let start_end = await contract.methods.getDurationByIndex(tokenId, index).call();
        return start_end;
    }
    public static async getVNftId(contract:any,originalNftId:any): Promise<any> {
        let id = await contract.methods.getXNftId(originalNftId).call();
        return id;
    }
    public static async getWNftId(contract:any,originalNftId:any): Promise<any> {
        let id = await contract.methods.getXNftId(originalNftId).call();
        return id;
    }

    public static async isVNft(contract:any,tokenId:any): Promise<any> {
        let bool = await contract.methods.isXNft(tokenId).call();
        return bool;
    }
    public static async isWNft(contract:any,tokenId:any): Promise<any> {
        let bool = await contract.methods.isXNft(tokenId).call();
        return bool;
    }
    public static async isValidNow(contract:any,tokenId:any): Promise<any> {
        let bool = await contract.methods.isValidNow(tokenId).call();
        return bool;
    }
    public static async getOriginalNftAddress(contract:any): Promise<any> {
        let bool = await contract.methods.getOriginalNftAddress().call();
        return bool;
    }
    public static async getOriginalNftId(contract:any,tokenId:any): Promise<any> {
        let id = await contract.methods.getOriginalNftId(tokenId).call();
        return id;
    }
    public static async getUser(contract:any,tokenId:any): Promise<any> {
        let user = await contract.methods.getUser(tokenId).call();
        return user;
    }

    public static async getTokensOfOwner(contract:any,address:any, from: number, to: number): Promise<any> {
        let ids:any[] = [];
        let balance = await contract.methods.balanceOf(address).call();
        if (from >= balance) return ids;
        if (to <= 0 || to > balance) {
            to = balance
        }
        for (let index = from; index < balance; index++) {
            let id = await contract.methods.tokenOfOwnerByIndex(address, index).call();
            ids.push(id);
        }
        return ids;
    }

    public static async isOriginalValidNow(contract:any,originalNftId:any): Promise<any> {
        let tokenId = await contract.methods.getXNftId(originalNftId).call();
        if (tokenId == 0) return true;
        let bool = await contract.methods.isValidNow(tokenId).call();
        return bool;
    }




}
