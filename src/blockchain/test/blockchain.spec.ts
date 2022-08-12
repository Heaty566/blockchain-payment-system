import { BlockChain } from '../blockchain';

describe('Blockchain', () => {
    it('Add 5 New Block', () => {
        const blockchain = new BlockChain();
        const addLength = 5;
        for (let index = 0; index < addLength; index++) {
            blockchain.addNewBlock({ data: [`test ${index}`] });
        }

        expect(blockchain.chain.length).toBe(addLength + 1);
        expect(BlockChain.isValidChain(blockchain.chain)).toBe(true);
    });
});
