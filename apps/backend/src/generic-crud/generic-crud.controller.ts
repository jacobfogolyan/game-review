import {
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Controller,
} from '@nestjs/common';
import { GenericCrudService } from './generic-crud.service';
import { CreateGenericDto, UpdateGenericDto } from './dto/generic.dto';
import { Document } from 'mongoose';

@Controller('generic-crud')
export class GenericCrudController<T extends Document> {
  constructor(private readonly service: GenericCrudService<T>) {}

  @Post()
  create(@Body() createDto: CreateGenericDto<T>) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateGenericDto<T>) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
