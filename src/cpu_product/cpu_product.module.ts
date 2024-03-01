import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { CpuProductService } from './cpu_product.service';
import { CpuProductController } from './cpu_product.controller';
import { Cpu_ProductEntity } from './entities/cpu_product.entity';
import { CategoryModule } from 'src/category/category.module';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Cpu_ProductEntity, CategoryEntity]),
    CategoryModule,
  ],
  controllers: [CpuProductController],
  providers: [CpuProductService],
})
export class CpuProductModule {}
