import { Injectable } from '@nestjs/common';
import { Document, Model } from 'mongoose';
import { CreateGenericDto, UpdateGenericDto } from './dto/generic.dto';

@Injectable()
export class GenericCrudService<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(createDto: CreateGenericDto<T>): Promise<T> {
    return this.model.create(createDto);
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async update(id: string, updateDto: UpdateGenericDto<T>): Promise<T> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}
