import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: number;

  @Column()
  placeId: number;

  @Column({ nullable: true })
  invoiceId: number;
}
