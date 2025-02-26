/** @ENTRY_POINT */

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import { env } from 'process';
import fs from 'fs';

global.__filename = fileURLToPath(import.meta.url);
global.__dirname = dirname(__filename);

const envPath = path.join(__dirname, '../', `.env.${env.NODE_ENV}`);

if(!fs.existsSync(envPath))
    config({ path: envPath });
else 
    throw new Error(`.env not found: ${envPath}`);

import('./server.js');