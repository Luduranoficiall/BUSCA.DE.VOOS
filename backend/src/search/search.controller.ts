import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  async globalSearch(
    @Query('origin') origin: string,
    @Query('destination') destination: string,
    @Query('date') date: string
  ) {
    return this.searchService.globalSearch(origin, destination, date);
  }
}
