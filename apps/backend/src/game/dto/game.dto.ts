import { PartialType } from '@nestjs/mapped-types';
import type { Media, Score } from '../types';
import type { Review } from '../../review/types';

export class BaseGameDto {
  readonly title: string;
  readonly description?: string;
  readonly developer?: string;
  readonly publisher?: string;
  readonly releaseDate?: Date;
  readonly genres?: string[];
  readonly platforms?: string[];
  readonly media?: Media[];
  readonly scores?: Score;
  readonly reviews: Review[];
}

export class CreateGameDto extends PartialType(BaseGameDto) {}

export class UpdateGameDto extends PartialType(BaseGameDto) {}

export class DeleteGameDto extends PartialType(BaseGameDto) {}
