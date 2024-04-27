import { PartialType } from '@nestjs/mapped-types';
import type { Media, Scores } from '../types';

export class BaseDto {
  readonly title: string;
  readonly description?: string;
  readonly developer?: string;
  readonly publisher?: string;
  readonly releaseDate?: Date;
  readonly genres?: string[];
  readonly platforms?: string[];
  readonly media?: Media[];
  readonly scores?: Scores;
}

export class CreateGameDto extends PartialType(BaseDto) {}

export class UpdateGameDto extends PartialType(BaseDto) {}

export class DeleteGameDto extends PartialType(BaseDto) {}
