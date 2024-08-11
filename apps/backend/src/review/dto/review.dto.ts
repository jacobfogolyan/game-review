import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional, IsString } from 'class-validator';
import mongoose from 'mongoose';

// TODO: Add media documents
import { Media } from 'src/game/types';

export class BaseReviewDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly reviewTitle: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly reviewDescription: string;

  // TODO: Add media Document
  @ApiProperty({ required: true, type: Object })
  @IsOptional()
  readonly media?: Media;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly gameId: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly author: mongoose.Schema.Types.ObjectId;

  @ApiPropertyOptional({ type: Date })
  @IsDate()
  @Transform(({ value }) => value && new Date(value))
  @IsOptional()
  readonly updatedAt?: Date;

  @ApiPropertyOptional({ type: Date })
  @IsDate()
  @Transform(({ value }) => value && new Date(value))
  @IsOptional()
  readonly postedAt?: Date;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly description: string;
}

export class CreateReviewDto extends PartialType(BaseReviewDto) {}

export class UpdateReviewDto extends PartialType(BaseReviewDto) {}
