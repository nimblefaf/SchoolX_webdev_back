import { ApiHideProperty } from '@nestjs/swagger';
import { Cpu_ProductEntity } from 'src/cpu_product/entities/cpu_product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiHideProperty()
  @OneToMany(() => Cpu_ProductEntity, (cpu_product) => cpu_product.category)
  cpu_products: Cpu_ProductEntity[];
}
