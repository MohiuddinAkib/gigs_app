//config/database.ts
export default {
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  DB_DIALECT: process.env.DB_DIALECT,
};
