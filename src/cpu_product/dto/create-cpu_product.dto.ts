/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNumberString } from 'class-validator';

export class CreateCpuProductDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @IsString()
  name: string = 'Название процессора';

  @IsString()
  description: string = 'Краткое маркетинговое описание';

  @IsString()
  socket: string = 'Сокет процессора';

  @IsString()
  architecture: string = 'Архитектура процессора';

  @IsString()
  manufacturer: string = 'производитель'

  @IsNumber()
  coreCount: number = 1;

  @IsNumber()
  threadCount: number = 1;

  @IsNumber()
  price: number = 1;

  @IsNumberString()
  categoryId: number;
}
