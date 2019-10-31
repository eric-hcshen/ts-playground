import express = require('express');
import {Router, Request, Response, NextFunction} from 'express';

const router: Router = express.Router();
router.get('/users', (req: Request, res: Response, next: NextFunction) => {
    res.json({name: 'ABC', gender: 'Male'});
    next();
});
export {router as userRouter};