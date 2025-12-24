import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { FlightsModule } from '../flights/flights.module';
import { HotelsModule } from '../hotels/hotels.module';
import { ToursModule } from '../tours/tours.module';

@Module({
  imports: [FlightsModule, HotelsModule, ToursModule],
  providers: [SearchService],
  exports: [SearchService],
})
export class SearchModule {}
