import 'reflect-metadata';
import './controllers';
import cookies from 'cookie-parser';
import cors from 'cors';
import express, { json, NextFunction, urlencoded } from 'express';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { IEmailService } from './interfaces';
import { EmailService } from './services';
import { TOKENS } from './tokens';
import { core } from '~core';

const IOC = new Container();
IOC.bind<IEmailService>(TOKENS.EmailService).to(EmailService);

const PORT = Number(process.env.PORT) || 8000;

const server = new InversifyExpressServer(IOC);
server.setConfig((app) => {
    app.use(cors({
        origin: 'http://localhost:8080',
        credentials: true,
    }));
    app.use(urlencoded({
        extended: true,
    }));

    app.use((req: express.Request, res: express.Response, next: NextFunction) => {
        const originalSendFunc = res.send.bind(res);
        res.send = (body) => {
            if (res.statusCode < 400) {
                const apiResponse = core.APIResponse.fromContent(body)
                core.APIResponse.log(apiResponse, req.path);
            }
            res.send = originalSendFunc;
            return originalSendFunc(body);
        };
        next();
    });

    app.use(json());
    app.use(cookies());
});

const app = server.build();

app.use((err: Error, req: express.Request, res: express.Response, __: any) => {
    const apiError = core.APIError.fromError(err);
    core.APIError.log(apiError, req.path)
    res.status(apiError.code).send(core.APIError.toResponse(apiError));
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`⚡️[server]: Server is running at http://0.0.0.0:${PORT}`);
    });
}

export { app, IOC };