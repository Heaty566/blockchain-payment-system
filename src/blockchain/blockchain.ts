import { Block } from './block';
import { cryptoHash } from './utils';

export class BlockChain {
    chain: Block[] = [];
    constructor() {
        this.chain = [Block.generis()];
    }

    addNewBlock({ data }: { data: any }) {
        const newBlock = Block.mineBlock({
            lastBlock: this.chain[this.chain.length - 1],
            data,
        });
        this.chain.push(newBlock);
    }

    static isValidChain(chain: Block[]) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.generis())) {
            return false;
        }

        for (let i = 1; i < chain.length; i++) {
            const block = chain[i];
            const lastBlock = chain[i - 1];

            //check last block
            if (block.lastHash !== lastBlock.hash) {
                return false;
            }
            if (Math.abs(block.difficulty - lastBlock.difficulty) > 1) return false;
            //check current block
            const compareHash = cryptoHash(block.timestamp, block.data, block.lastHash, block.nonce, block.difficulty);
            if (compareHash !== block.hash) {
                return false;
            }
        }

        return true;
    }
}
