import express, { Request, Response } from 'express';
import logger from './middlewares/loggers';
import validateEnv from './utils/validateEnv';
import dotenv from 'dotenv';
import router from './router/router';

dotenv.config();
validateEnv();
const PORT = process.env.PORT ?? 3333;
const app = express();
const logPath = `${process.cwd()}/logs/`;
const publicPath = `${process.cwd()}/public`;

app.use(logger('completo', logPath + process.env.LOG_FILE));
app.use(router);
app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});
