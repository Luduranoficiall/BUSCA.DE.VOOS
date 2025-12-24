import { Router } from 'express';
import { aiPlanHandler } from './aiPlanner.controller';

const router = Router();

router.post('/ai/plan', aiPlanHandler);

export default router;
