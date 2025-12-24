import OpenAI from "openai";
const ai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

type PlanTripInput = {
  from: string;
  to: string;
  dates: string;
  budget: string;
  profile: string;
};

export async function planTrip(input: PlanTripInput) {
  const prompt = `\n  Crie um plano de viagem completo em JSON:\n  origem=${input.from}\n  destino=${input.to}\n  datas=${input.dates}\n  orçamento=${input.budget}\n  perfil=${input.profile}\n\n  Inclua:\n  - voos\n  - hotel\n  - passeios\n  - custo estimado\n  - melhor época\n  `;
  const r = await ai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });
  return r.output_text;
}
