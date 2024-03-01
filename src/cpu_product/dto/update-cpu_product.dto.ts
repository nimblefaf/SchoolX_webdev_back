import { PartialType } from '@nestjs/swagger';
import { CreateCpuProductDto } from './create-cpu_product.dto';

export class UpdateCpuProductDto extends PartialType(CreateCpuProductDto) {}
