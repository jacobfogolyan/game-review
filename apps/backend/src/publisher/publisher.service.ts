import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericCrudService } from 'src/generic-crud/generic-crud.service';
import { Publisher, PublisherDocument } from './schemas/publisher.schema';

@Injectable()
export class PublisherService extends GenericCrudService<PublisherDocument> {
  constructor(
    @InjectModel(Publisher.name)
    readonly publisherModel: Model<PublisherDocument>,
  ) {
    super(publisherModel);
  }
}
