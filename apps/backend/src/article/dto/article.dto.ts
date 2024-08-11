import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

import { Game } from 'src/game/schemas/game.schema';
import { User } from 'src/user/schemas/user.schema';
import { IsDate, IsOptional, IsString, IsArray } from 'class-validator';

export class BaseArticleDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly name: string;

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString()
  readonly description?: string;

  @ApiPropertyOptional({ type: Date })
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  @IsOptional()
  readonly releaseDate?: Date;

  @ApiProperty({ type: [String], isArray: true })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly genres?: string[];

  @ApiProperty({ type: [String], isArray: true })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly platforms?: string[];

  @ApiProperty({ type: [String], isArray: true })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  readonly permissions?: string[];

  @ApiProperty({ required: true, type: Object })
  readonly user: User;

  @ApiProperty({ required: true, type: Object })
  readonly game: Game;
}
export class CreateArticleDto extends PartialType(BaseArticleDto) {}

export class UpdateArticleDto extends PartialType(BaseArticleDto) {}

export class DeleteArticleDto extends PartialType(BaseArticleDto) {}
