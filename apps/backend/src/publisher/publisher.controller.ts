import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { PublisherDocument } from './schemas/publisher.schema';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController extends GenericCrudController<PublisherDocument> {
  constructor(readonly publisherService: PublisherService) {
    super(publisherService);
  }
}
