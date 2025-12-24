import api from "./api";
export const getReco = (profile) => api.post("/reco", profile);
