import { BLOCK_CHAIN_CONSTANT } from './constant';
import { cryptoHash, hex2bin } from './utils';

export class Block {
    timestamp: number;
    lastHash: string;
    hash: string;
    data: any;
    nonce: number;
    difficulty: number;

    constructor({ timestamp, lastHash, hash, data, nonce, difficulty }: { timestamp: number; lastHash: string; hash: string; data: any; nonce: number; difficulty: number }) {
        this.data = data;
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.hash = hash;
    }
    static generis() {
        const timestamp = 1660284715597;
        const data = [];
        const lastHash = '';
        const nonce = 0;
        const difficulty = BLOCK_CHAIN_CONSTANT.INIT_DIFFICULTY;
        const hash = cryptoHash(timestamp, data, lastHash, nonce, difficulty);

        return new Block({
            timestamp,
            lastHash,
            hash,
            data,
            nonce,
            difficulty,
        });
    }

    static mineBlock({ lastBlock, data }) {
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;

        let timestamp = Date.now();
        let nonce = 0;
        let hash = '';

        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({ originalBlock: lastBlock, timestamp });
            hash = cryptoHash(timestamp, data, lastHash, nonce, difficulty);
        } while (hex2bin(hash).substring(0, difficulty) !== Array(difficulty + 1).join('0'));

        return new Block({
            timestamp,
            lastHash,
            hash,
            data,
            nonce,
            difficulty,
        });
    }

    static adjustDifficulty({ originalBlock, timestamp }) {
        const { difficulty } = originalBlock;

        if (difficulty < 1) return 1;

        if (timestamp - originalBlock.timestamp > BLOCK_CHAIN_CONSTANT.MINE_RATE) return difficulty - 1;

        return difficulty + 1;
    }
}
