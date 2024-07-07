import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { GameDocument } from './schemas/game.schema';
import { GameService } from './game.service';

@Controller('game')
export class GameController extends GenericCrudController<GameDocument> {
  constructor(readonly gameService: GameService) {
    super(gameService);
  }
}
