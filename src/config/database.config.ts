export default {
  schema: process.env.DB_SCHEMA,
  name: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
};
