import { Router } from 'express';
import { reportHandler } from './b2b.controller';

const router = Router();

router.post('/b2b/trips/report', reportHandler);

export default router;
