import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './entities/reservation.entity';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationsRepository: Repository<Reservation>,
  ) {}

  async create(createReservationDto: CreateReservationDto): Promise<Reservation> {
    const reservation = this.reservationsRepository.create(createReservationDto);
    return this.reservationsRepository.save(reservation);
  }
}
