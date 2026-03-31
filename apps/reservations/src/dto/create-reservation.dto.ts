import { IsDate, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReservationDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsInt()
  userId: number;

  @IsInt()
  placeId: number;

  @IsInt()
  @IsOptional()
  invoiceId?: number;
}
