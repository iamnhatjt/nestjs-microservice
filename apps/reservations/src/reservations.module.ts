import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ConfigModule, DatabaseModule, LoggerModule } from '@app/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    LoggerModule,
    TypeOrmModule.forFeature([Reservation]),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
