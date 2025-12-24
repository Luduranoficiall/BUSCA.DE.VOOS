import { Controller, Get, Query } from '@nestjs/common';
import { ToursService } from './tours.service';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Get('search')
  async search(@Query('city') city: string): Promise<any> {
    return await this.toursService.searchTours(city);
  }
}
