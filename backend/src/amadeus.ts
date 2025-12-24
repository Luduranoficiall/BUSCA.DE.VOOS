import axios from "axios";

export async function getAmadeusToken(): Promise<string> {
  const r = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_CLIENT_ID as string,
      client_secret: process.env.AMADEUS_CLIENT_SECRET as string,
    })
  );
  return r.data.access_token;
}
