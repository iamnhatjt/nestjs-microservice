import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';

@Module({
    imports: [ConfigModuleRoot.forRoot({ isGlobal: true })]
})
export class ConfigModule {}
