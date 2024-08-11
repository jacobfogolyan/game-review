import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { GameDeveloperDocument } from './schemas/game-developer.schema';
import { GameDeveloperService } from './game-developer.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('game-developer')
@ApiTags('Game Developer')
export class GameDeveloperController extends GenericCrudController<GameDeveloperDocument> {
  constructor(readonly gameDeveloperService: GameDeveloperService) {
    super(gameDeveloperService);
  }
}
