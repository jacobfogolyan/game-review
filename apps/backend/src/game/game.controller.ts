import { Controller } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { GameDocument } from './schemas/game.schema';
import { GameService } from './game.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateGameDto, UpdateGameDto } from './dto';

@ApiTags('game')
@Controller('game')
export class GameController extends GenericCrudController<
  GameDocument,
  CreateGameDto,
  UpdateGameDto
> {
  constructor(readonly gameService: GameService) {
    super(gameService);
  }
}
