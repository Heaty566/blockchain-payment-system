import { Block } from '../block';

describe('Block', () => {
    it('Has generis block', () => {
        const generisBlock = Block.generis();
        expect(generisBlock).toBeDefined();
    });
    it('Mine test', () => {
        const generisBlock = Block.generis();
        const nextBlock = Block.mineBlock({ lastBlock: generisBlock, data: ['test'] });

        expect(nextBlock.lastHash).toBe(generisBlock.hash);
        expect(nextBlock).toBeDefined();
    });
});
