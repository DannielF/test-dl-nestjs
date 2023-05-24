import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import databaseConfig from './db.config';

export const typeOrmConfig: TypeOrmModuleOptions = databaseConfig;

/**
 * TypeOrm async configuration
 * @see https://docs.nestjs.com/techniques/database#async-configuration
 * @author dannielf
 * @version 0.0.1
 */
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return databaseConfig;
  },
};
