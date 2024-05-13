import { PartialType } from '@nestjs/mapped-types';

export class BaseDto {
  readonly name: string;
  readonly description?: string;
  readonly releaseDate?: Date;
  readonly genres?: string[];
  readonly platforms?: string[];
  readonly permissions?: string[];
}
export class CreateArticleDto extends PartialType(BaseDto) {}

export class UpdateArticleDto extends PartialType(BaseDto) {}

export class DeleteArticleDto extends PartialType(BaseDto) {}
