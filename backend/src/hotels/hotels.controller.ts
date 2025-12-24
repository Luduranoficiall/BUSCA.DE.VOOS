import { Controller, Get, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  @Get('search')
  async search(@Query('city') city: string) {
    return this.hotelsService.searchHotels(city);
  }
}
