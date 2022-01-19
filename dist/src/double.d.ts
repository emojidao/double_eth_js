export declare class Double {
    static getDuration(contract: any, durationId: any): Promise<any>;
    static getDoNftInfo(contract: any, tokenId: any): Promise<any>;
    static getDurationIdList(contract: any, tokenId: any): Promise<any>;
    static getDurationListLength(contract: any, tokenId: any): Promise<any>;
    static getDurationByIndex(contract: any, tokenId: any, index: number): Promise<any>;
    static getVNftId(contract: any, originalNftId: any): Promise<any>;
    static getWNftId(contract: any, originalNftId: any): Promise<any>;
    static isVNft(contract: any, tokenId: any): Promise<any>;
    static isWNft(contract: any, tokenId: any): Promise<any>;
    static isValidNow(contract: any, tokenId: any): Promise<any>;
    static getOriginalNftAddress(contract: any): Promise<any>;
    static getOriginalNftId(contract: any, tokenId: any): Promise<any>;
    static getUser(contract: any, tokenId: any): Promise<any>;
    static getTokensOfOwner(contract: any, address: any, from: number, to: number): Promise<any>;
    static isOriginalValidNow(contract: any, originalNftId: any): Promise<any>;
}
