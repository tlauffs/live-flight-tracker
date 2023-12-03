import { Config, Context } from "@netlify/functions";

const fetchDataWithRetry = async (url, maxRetries = 1) => {
  for (let retryCount = 0; retryCount <= maxRetries; retryCount++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error(`Error fetching data (Attempt ${retryCount + 1}):`, error);

      if (retryCount < maxRetries) {
        console.log("Retrying...");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        throw error;
      }
    }
  }
};

export default async (req: Request, context: Context) => {
  try {
    const apiKey = process.env.aviationstack_key;
    const apiUrlBase = "http://api.aviationstack.com/v1/flights";
    const flightStatus = "active";
    const offsetIncrement = 100;
    const numberOfRequests = 0;

    const requests = Array.from({ length: numberOfRequests }, (_, i) => {
      const offset = i * offsetIncrement;
      const apiUrl = `${apiUrlBase}?access_key=${apiKey}&flight_status=${flightStatus}&offset=${offset}`;
      return fetchDataWithRetry(apiUrl, 1);
    });

    const concatenatedData = await Promise.all(requests);

    const responseBody = JSON.stringify({
      data: [].concat(...concatenatedData),
    });

    return new Response(responseBody, { status: 200 });
  } catch {
    return new Response("Internal Error", { status: 500 });
  }
};

export const config: Config = {
  path: "/all_flights",
};
