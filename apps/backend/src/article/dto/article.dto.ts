import { PartialType } from '@nestjs/mapped-types';
import { Game } from 'src/game/schemas/game.schema';
import { User } from 'src/user/schemas/user.schema';

export class BaseArticleDto {
  readonly name: string;
  readonly description?: string;
  readonly releaseDate?: Date;
  readonly genres?: string[];
  readonly platforms?: string[];
  readonly permissions?: string[];
  readonly user: User;
  readonly game: Game;
}
export class CreateArticleDto extends PartialType(BaseArticleDto) {}

export class UpdateArticleDto extends PartialType(BaseArticleDto) {}

export class DeleteArticleDto extends PartialType(BaseArticleDto) {}
