import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/domain/user.entity';

const configService = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: configService.get<number>('db_port'),
  username: 'root',
  password: configService.get<string>('db_password'),
  database: configService.get<string>('db_name'),
  entities: [User],
  migrations: ['migrations/*{.ts,.js}'],
  logging: true,
  autoLoadEntities: true,
  synchronize: false,
};
