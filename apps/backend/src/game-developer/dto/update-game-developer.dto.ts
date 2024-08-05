import { PartialType } from '@nestjs/mapped-types';
import { CreateGameDeveloperDto } from './create-game-developer.dto';

export class UpdateGameDeveloperDto extends PartialType(CreateGameDeveloperDto) {}
