class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "qwer", "", "Hello", 123456);

/* 배열안에 Block 타입만 들어갈 수 있음 */
let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
