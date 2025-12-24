import { recommend } from "./recommendation.service";
import { Request, Response } from 'express';

export async function getRecommendations(req: Request, res: Response) {
  const data = await recommend(req.body);
  res.json(data);
}
