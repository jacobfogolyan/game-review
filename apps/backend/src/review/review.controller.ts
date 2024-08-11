import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { ReviewDocument } from './schemas/review.schema';
import { ReviewService } from './review.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('review')
@ApiTags('Review')
export class ReviewController extends GenericCrudController<ReviewDocument> {
  constructor(readonly reviewService: ReviewService) {
    super(reviewService);
  }
}
