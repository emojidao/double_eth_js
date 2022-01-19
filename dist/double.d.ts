export declare class Double {
    private _contract;
    private web3js;
    initContract(abi: any, address: string): void;
    set contract(contract_: any);
    get contract(): any;
    getDuration(durationId: any): Promise<any>;
    getDoNftInfo(tokenId: any): Promise<any>;
    getDurationIdList(tokenId: any): Promise<any>;
    getDurationListLength(tokenId: any): Promise<any>;
    getDurationByIndex(tokenId: any, index: number): Promise<any>;
    getVNftId(originalNftId: any): Promise<any>;
    getWNftId(originalNftId: any): Promise<any>;
    isVNft(tokenId: any): Promise<any>;
    isWNft(tokenId: any): Promise<any>;
    isValidNow(tokenId: any): Promise<any>;
    getOriginalNftAddress(): Promise<any>;
    getOriginalNftId(tokenId: any): Promise<any>;
    getUser(tokenId: any): Promise<any>;
    getTokensOfOwner(address: any, from: number, to: number): Promise<any>;
    isOriginalValidNow(originalNftId: any): Promise<any>;
}
