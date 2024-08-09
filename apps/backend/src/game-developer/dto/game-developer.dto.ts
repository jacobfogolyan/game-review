import { PartialType } from '@nestjs/mapped-types';

export class BaseGameDeveloperDto {
  readonly name: string;
  readonly country: string;
}

export class CreateGameDeveloperDto extends PartialType(BaseGameDeveloperDto) {}

export class UpdateGameDeveloperDto extends PartialType(BaseGameDeveloperDto) {}

export class DeleteGameDeveloperDto extends PartialType(BaseGameDeveloperDto) {}
