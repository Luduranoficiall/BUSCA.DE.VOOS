import { Module } from '@nestjs/common';
import { FlightsService } from './flights.service';

@Module({
  providers: [FlightsService],
  exports: [FlightsService],
})
export class FlightsModule {}
