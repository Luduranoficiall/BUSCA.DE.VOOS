import axios from 'axios';

export class FlightsService {
  async searchFlights(origin: string, destination: string, date: string) {
    const response = await axios.get(
      `https://test.api.amadeus.com/v2/shopping/flight-offers`,
      {
        params: { originLocationCode: origin, destinationLocationCode: destination, departureDate: date, adults: 1 },
        headers: { Authorization: `Bearer ${process.env.AMADEUS_TOKEN}` }
      }
    );
    return response.data;
  }
}
