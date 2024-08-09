import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schemas/game.schema';
import { GenericCrudService } from 'src/generic-crud/generic-crud.service';

@Injectable()
export class GameService extends GenericCrudService<GameDocument> {
  constructor(@InjectModel(Game.name) readonly gameModel: Model<GameDocument>) {
    super(gameModel);
  }
}
