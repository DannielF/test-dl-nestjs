import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: 'localhost',
      port: this.configService.get<number>('db_port'),
      username: this.configService.get<string>('db_username'),
      password: this.configService.get<string>('db_password'),
      database: this.configService.get<string>('db_name'),
      autoLoadEntities: true,
      synchronize: false,
    };
  }
}
