import { domain, uploadsDirPath } from './global/index.js';
<<<<<<< HEAD
import { authRouter } from './routes/auth/auth.router.js';
=======
import { authRouter } from './routes/auth/auth.route.js';
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import http from 'http';
import { setupRoutes } from './utils/setupRoutes.js';
import { checkUploadsDirExistence } from './utils/checkUploadsDirExistence.js';
import { dbClient } from './database/dbClient.js';
import { initSocket } from './routes/socket/index.js';
<<<<<<< HEAD
// import { shellRoute } from './routes/shell/shell.router.js';
=======
// import { shellRoute } from './routes/shell/shell.route.js';
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529

const port = process.env.PORT || 5000;
const app = express();
const corsConfig = {
	credentials: true,
	// origin: `http://${domain}`
	origin: `*`
}
const routers = [
	authRouter,
<<<<<<< HEAD
	// shellRoute,
=======
//	shellRoute,
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529
]

checkUploadsDirExistence();

app.use(morgan('dev'));
app.use(cors(corsConfig));
app.use(express.json());
app.use('/uploads', express.static(uploadsDirPath));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(isTokenValid({
// 	reversedAuthRoutes: ['/auth/login']
// }));

const registeredRoutes = setupRoutes(app, routers);
const server           = http.createServer(app);

initSocket(server)

server.listen(port, async () => {
	console.log(`\n  Server running at http://localhost:${port}/\n`);
	console.log('  Cors:    ', corsConfig);
	console.log('  Routes:  ', registeredRoutes);
    
    try {
<<<<<<< HEAD
        await dbClient.authenticate();
=======
        await dbClient.authenticate({ logging: false });
>>>>>>> 8cd3399c077b1bed14a4b807476441833fc06529
        console.log('  Database: Connected to Sqlite\n');
    } catch (error) {
        console.error('  Unable to connect to the database:', error);
    }
});
