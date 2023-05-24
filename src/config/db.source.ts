import { DataSource } from 'typeorm';
import databaseConfig from './db.config';

/**
 * DataSource configuration
 * @author: dannielf
 * @version: 0.0.1
 */
export const AppDataSource = new DataSource(databaseConfig);
