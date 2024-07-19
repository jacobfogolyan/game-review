import { PartialType } from '@nestjs/mapped-types';
import { BaseReviewDto } from './base-review';

export class CreateReviewDto extends PartialType(BaseReviewDto) {}
