import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schemas/game.schema';
import { GenericCrudService } from '../generic-crud/generic-crud.service';

@Injectable()
export class GameService extends GenericCrudService<GameDocument> {
  constructor(
    @InjectModel(Game.name) readonly gameModel: Model<GameDocument>, // Correctly type the model
  ) {
    super(gameModel);
  }
}
