import { Request, Response, NextFunction } from 'express';
import { Tipo } from './loggerTypes';
import fs from 'fs';

function logger(tipo: Tipo, logPath: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        let output;
        if (tipo === 'completo') {
            output = `${new Date().toISOString()} ${req.method}\n`;
        } else {
            output = `${new Date().toISOString()} ${req.url}\n`;
        }
        fs.writeFile(logPath, output, { flag: 'a' }, (err) => {
            if (err) throw err;
        });
        next();
    };
}

export default logger;
