import axios from 'axios';

export class HotelsService {
  async searchHotels(city: string) {
    const response = await axios.get(
      `https://api.booking.com/hotels/search`,
      { params: { city } }
    );
    return response.data;
  }
}
