import { Config, Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  try {
    const apiKey = process.env.aviationstack_key;
    const iata = context.params.iata;
    const apiUrlBase = "http://api.aviationstack.com/v1/flights";
    const apiUrl = `${apiUrlBase}?access_key=${apiKey}&flight_iata=${iata}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data.data), { status: 200 });
  } catch {
    return new Response("Internal Error", { status: 500 });
  }
};

export const config: Config = {
  path: "/flight_number/:iata",
};
