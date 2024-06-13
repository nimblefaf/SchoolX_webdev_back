import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CpuProductService } from './cpu_product.service';
import { CreateCpuProductDto } from './dto/create-cpu_product.dto';
import { UpdateCpuProductDto } from './dto/update-cpu_product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cpu-product')
@Controller('cpu-product')
export class CpuProductController {
  constructor(private readonly cpuProductService: CpuProductService) {}

  @Post()
  create(@Body() createCpuProductDto: CreateCpuProductDto) {
    return this.cpuProductService.create(createCpuProductDto);
  }

  @Get()
  findAll() {
    return this.cpuProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cpuProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCpuProductDto: UpdateCpuProductDto) {
    return this.cpuProductService.update(+id, updateCpuProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cpuProductService.remove(+id);
  }
}
