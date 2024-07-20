import { PartialType } from '@nestjs/mapped-types';
import { Media } from 'src/game/types';

export class BaseReviewDto {
  readonly reviewTitle: string;
  readonly reveiewDescription: string;
  readonly media: Media;
  readonly gameId: string;
  readonly author: string;
  readonly updatedAt: Date;
  readonly postedAt: Date;
  readonly description: string;
}

export class CreateReviewDto extends PartialType(BaseReviewDto) {}
export class UpdateReviewDto extends PartialType(BaseReviewDto) {}
