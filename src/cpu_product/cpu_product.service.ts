import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCpuProductDto } from './dto/create-cpu_product.dto';
import { UpdateCpuProductDto } from './dto/update-cpu_product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cpu_ProductEntity } from './entities/cpu_product.entity';
import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm';

@Injectable()
export class CpuProductService {
  constructor(
    @InjectRepository(Cpu_ProductEntity)
    private repository: Repository<Cpu_ProductEntity>,
  ) {}

  create(dto: CreateCpuProductDto) {
    const entity: DeepPartial<Cpu_ProductEntity> = {
      name: dto.name,
      description: dto.description,
      socket: dto.socket,
      architecture: dto.architecture,
      manufacturer: dto.manufacturer,
      coreCount: dto.coreCount,
      ThreadCount: dto.threadCount,
      price: dto.price,
      image: "0"
  };
    return this.repository.save(entity);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateCpuProductDto) {
    const toUpdate = await this.repository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Запись с id=${id} не найдена`);
    }
    if (dto.name) {
      toUpdate.name = dto.name;
    }
    return this.repository.save(toUpdate);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}