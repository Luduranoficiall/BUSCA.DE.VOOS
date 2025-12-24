import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_KEY });

export async function recommend(profile: any) {
  const prompt = `\n  Sugira destinos, hotéis e passeios considerando:\n  orçamento=${profile.budget},\n  clima=${profile.weather},\n  perfil=${profile.profile},\n  datas=${profile.dates}.\n  Responda em JSON.\n  `;
  const r = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });
  return r.output_text;
}
