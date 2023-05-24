export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'postgres',
    host: 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || 'test123',
    database: process.env.DB_NAME || 'test-dl',
    migrations: [__dirname + '/../src/migrations/*{.ts,.js}'],
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
  },
});
