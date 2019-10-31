import express = require('express');
import {Request, Response, NextFunction, Router} from 'express';

const router: Router = express.Router();

router.get('/courses', (req: Request, res: Response, next: NextFunction) => {
    res.json({course: 'Angular'});
});

export {router as coursesRouter};