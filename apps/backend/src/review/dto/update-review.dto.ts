import { PartialType } from '@nestjs/mapped-types';
import { BaseReviewDto } from './base-review';

export class UpdateReviewDto extends PartialType(BaseReviewDto) {}
