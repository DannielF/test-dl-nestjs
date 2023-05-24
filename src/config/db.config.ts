import 'dotenv/config';
import { User } from 'src/users/domain/user.entity';
import { DataSourceOptions } from 'typeorm';

/**
 * Database configuration
 * @see https://typeorm.io/#/connection-options
 * @author: dannielf
 * @version: 0.0.1
 */
const databaseConfig: DataSourceOptions = {
  name: 'postgres',
  type: 'postgres',
  host: 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  database: process.env.DB_NAME || 'test-dl',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'test123',
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
  migrationsRun: true,
};

export default databaseConfig;
