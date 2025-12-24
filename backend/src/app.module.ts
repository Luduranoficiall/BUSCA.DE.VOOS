import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';
import { HotelsModule } from './hotels/hotels.module';
import { ToursModule } from './tours/tours.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    FlightsModule,
    HotelsModule,
    ToursModule,
    SearchModule,
  ],
})
export class AppModule {}
