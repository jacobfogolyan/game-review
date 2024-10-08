import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { GameDeveloperDocument } from './schemas/game-developer.schema';
import { GameDeveloperService } from './game-developer.service';

@Controller('game-developer')
export class GameDeveloperController extends GenericCrudController<GameDeveloperDocument> {
  constructor(readonly gameDeveloperService: GameDeveloperService) {
    super(gameDeveloperService);
  }
}
