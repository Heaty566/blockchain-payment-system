import { Module } from '@nestjs/common';
import { BlockChain } from './core/blockchain';
import { BlockchainService } from './blockchain.service';

@Module({
    providers: [
        {
            provide: BlockChain,
            useFactory: () => {
                const blockchain = new BlockChain();
                return blockchain;
            },
        },
        BlockchainService,
    ],
    exports: [BlockchainService],
})
export class BlockchainModule {}
