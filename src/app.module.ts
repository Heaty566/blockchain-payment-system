import { RedisModule } from './core/providers/redis/redis.module';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { DbModule } from './module.config';
import { UserModule } from './user/user.module';

@Module({
    imports: [DbModule, UserModule, AuthModule, BlockchainModule, RedisModule],
})
export class AppModule {}
