import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { PublisherDocument } from './schemas/publisher.schema';
import { PublisherService } from './publisher.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePublisherDto, UpdatePublisherDto } from './dto/publisher.dto';

@Controller('publisher')
@ApiTags('Publisher')
export class PublisherController extends GenericCrudController<
  PublisherDocument,
  CreatePublisherDto,
  UpdatePublisherDto
> {
  constructor(readonly publisherService: PublisherService) {
    super(publisherService);
  }
}
