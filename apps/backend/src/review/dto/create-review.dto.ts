import { PartialType } from '@nestjs/mapped-types';

export class BaseReviewDto {
  readonly title: string;
}

export class CreateReviewDto extends PartialType(BaseReviewDto) {}
