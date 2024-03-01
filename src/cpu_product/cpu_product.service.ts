import { Injectable } from '@nestjs/common';
import { CreateCpuProductDto } from './dto/create-cpu_product.dto';
import { UpdateCpuProductDto } from './dto/update-cpu_product.dto';

@Injectable()
export class CpuProductService {
  create(createCpuProductDto: CreateCpuProductDto) {
    return 'This action adds a new cpuProduct';
  }

  findAll() {
    return `This action returns all cpuProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpuProduct`;
  }

  update(id: number, updateCpuProductDto: UpdateCpuProductDto) {
    return `This action updates a #${id} cpuProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpuProduct`;
  }
}
