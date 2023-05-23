import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/domain/user.entity';

const configService = new ConfigService();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: configService.get<number>('DB_PORT'),
  username: 'root',
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  entities: [User],
  migrations: ['../migrations/*{.ts,.js}'],
  logging: true,
  autoLoadEntities: true,
  synchronize: false,
};
