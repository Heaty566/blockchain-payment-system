import { BlockChain } from './core/blockchain';
import { Injectable } from '@nestjs/common';

//----- Service

@Injectable()
export class BlockchainService {
    constructor(private readonly blockchain: BlockChain) {}
}
