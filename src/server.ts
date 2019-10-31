import express = require('express');
import { Application} from 'express';
import { userRouter} from './api/users'
import { coursesRouter} from './api/courses'
import { Request, Response, NextFunction } from 'express';
import errorHandler from 'errorhandler';

const ap: Application = express();
ap.use(express.static('files'));
const requestTime = function (req: Request, res: Response, next: NextFunction) {
    console.log('Time:', Date.now());
    console.log([req.method, req.url, 'Time:', Date.now()]);
    next();
};
ap.use(requestTime);
ap.use('/api', [userRouter, coursesRouter]);

//error handling
ap.use(errorHandler({log: true}));
ap.listen(80, (args: any[]) => {
    if(args === undefined) return;
    console.log(args);
});