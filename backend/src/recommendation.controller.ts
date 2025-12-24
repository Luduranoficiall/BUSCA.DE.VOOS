import { recommend } from "./recommendation.service";

export async function getRecommendations(req, res) {
  const data = await recommend(req.body);
  res.json(data);
}
