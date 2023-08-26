import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}