import axios from 'axios';

export class ToursService {
  async searchTours(city: string): Promise<any> {
    const response = await axios.get(
      `https://api.viator.com/products/search`,
      { params: { destination: city } }
    );
    return response.data;
  }
}
