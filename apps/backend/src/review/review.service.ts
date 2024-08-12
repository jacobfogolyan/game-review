import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './schemas/review.schema';
import { GenericCrudService } from 'src/generic-crud/generic-crud.service';
import { CreateReviewDto, UpdateReviewDto } from './dto';

@Injectable()
export class ReviewService extends GenericCrudService<
  ReviewDocument,
  CreateReviewDto,
  UpdateReviewDto
> {
  constructor(
    @InjectModel(Review.name) readonly reviewModel: Model<ReviewDocument>,
  ) {
    super(reviewModel);
  }
}
