import { planTrip } from "./aiPlanner";
import { Request, Response } from 'express';

export async function aiPlanHandler(req: Request, res: Response) {
  const plan = await planTrip(req.body);
  res.json(JSON.parse(plan));
}
