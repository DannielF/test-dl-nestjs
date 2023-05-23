export const EnvConfig = () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db_port: parseInt(process.env.DB_PORT, 10),
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
});
