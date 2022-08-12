import { Module } from '@nestjs/common';
import { createClient } from 'redis';
import { config } from '../../../core/config';

//---- Utils

//---- Service
import { RedisService } from './redis.service';

@Module({
    controllers: [],
    providers: [
        RedisService,
        {
            provide: 'RedisClient',
            useFactory: () => {
                const redis = createClient({ port: config.REDIS_PORT, host: config.REDIS_HOST });
                redis.select(config.REDIS_DB_NUMBER || 1);
                return redis;
            },
        },
    ],
    exports: [RedisService],
})
export class RedisModule {}
