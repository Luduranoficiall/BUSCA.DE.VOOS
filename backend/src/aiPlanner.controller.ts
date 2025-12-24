import { planTrip } from "./aiPlanner";

export async function aiPlanHandler(req, res) {
  const plan = await planTrip(req.body);
  res.json(JSON.parse(plan));
}
