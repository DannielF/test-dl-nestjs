export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  db_port: parseInt(process.env.DB_PORT, 10) || 3306,
  db_username: process.env.DB_USERNAME,
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
});
