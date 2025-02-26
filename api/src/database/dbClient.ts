import { Sequelize } from 'sequelize';
import { env } from 'process';

export const dbClient = new Sequelize(
  env.DB_NAME,
  env.DB_USER, 
  env.DB_PASSWORD,
  {
    port: Number(env.DB_PORT),
    host: env.DB_HOST,
    dialect: 'postgres'
  }
);