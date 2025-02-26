import { Sequelize } from 'sequelize';
import { env } from 'process';
import { sqliteDbPath } from '../global/index.js';

export const dbClient = new Sequelize(
  env.DB_NAME,
  env.DB_USER, 
  env.DB_PASSWORD,
  {
<<<<<<< HEAD
    port: Number(env.DB_PORT),
    host: env.DB_HOST,
    dialect: 'postgres'
=======
    host: env.DB_HOST,
    dialect: 'sqlite',
	storage: sqliteDbPath		
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529
  }
);
