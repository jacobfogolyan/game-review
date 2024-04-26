import { PartialType } from '@nestjs/mapped-types';

export class BaseDto {
  readonly name: string;
  readonly year?: string;
  readonly genre?: string;
  readonly rating?: number;
  readonly date?: Date;
}

export class CreateGameDto extends PartialType(BaseDto) {}

export class UpdateGameDto extends PartialType(BaseDto) {}

export class DeleteGameDto extends PartialType(BaseDto) {}
