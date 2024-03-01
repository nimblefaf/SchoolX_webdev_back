import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CategoryEntity } from 'src/category/entities/category.entity';

@Entity('cpu_product')
export class Cpu_ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  socket: string;

  @Column()
  architecture: string;

  @Column()
  manufacturer: string;

  @Column()
  coreCount: number;

  @Column()
  ThreadCount: number;

  @Column()
  price: number;

  @ManyToOne(() => CategoryEntity, (category) => category.cpu_products, {
    eager: true,
  })
  @JoinColumn()
    category: CategoryEntity;

}
