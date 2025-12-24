import api from "./api";
export const aiPlan = (data) => api.post("/ai/plan", data);
