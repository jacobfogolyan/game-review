import { Media } from 'src/game/types';

export class BaseReviewDto {
  readonly gameTitle: string;
  readonly reviewTitle: string;
  readonly reveiewDescription: string;
  readonly media: Media;
  readonly author: string;
  readonly updatedAt: Date;
  readonly postedAt: Date;
  readonly description: string;
}
