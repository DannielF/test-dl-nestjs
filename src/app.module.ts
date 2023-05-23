import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvConfig as configuration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/environment/.env`,
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
