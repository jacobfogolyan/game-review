import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class BaseGameDeveloperDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly country: string;
}

export class CreateGameDeveloperDto extends BaseGameDeveloperDto {}

export class UpdateGameDeveloperDto extends PartialType(BaseGameDeveloperDto) {}

export class DeleteGameDeveloperDto extends PartialType(BaseGameDeveloperDto) {}
