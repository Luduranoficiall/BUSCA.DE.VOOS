import { FlightsService } from '../flights/flights.service';
import { HotelsService } from '../hotels/hotels.service';
import { ToursService } from '../tours/tours.service';

export class SearchService {
  constructor(
    private flights: FlightsService,
    private hotels: HotelsService,
    private tours: ToursService
  ) {}

  async globalSearch(origin: string, destination: string, date: string) {
    const [flights, hotels, tours] = await Promise.all([
      this.flights.searchFlights(origin, destination, date),
      this.hotels.searchHotels(destination),
      this.tours.searchTours(destination),
    ]);

    return { flights, hotels, tours };
  }
}
