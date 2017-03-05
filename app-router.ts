import { Router, Request, Response } from 'express';

export const AppRouter = Router();

    AppRouter.get('/', function(request: Request, response: Response) {
      	response.sendFile('index.html', {root: '../senec-app/'});
    });
