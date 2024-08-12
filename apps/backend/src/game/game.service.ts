import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schemas/game.schema';
import { GenericCrudService } from 'src/generic-crud/generic-crud.service';
import { CreateGameDto, UpdateGameDto } from './dto';

@Injectable()
export class GameService extends GenericCrudService<
  GameDocument,
  CreateGameDto,
  UpdateGameDto
> {
  constructor(@InjectModel(Game.name) readonly gameModel: Model<GameDocument>) {
    super(gameModel);
  }
}
