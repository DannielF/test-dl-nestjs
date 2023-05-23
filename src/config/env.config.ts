export const EnvConfig = () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DB_PORT: parseInt(process.env.DB_PORT, 10),
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
});
