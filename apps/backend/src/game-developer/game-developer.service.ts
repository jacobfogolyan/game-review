import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericCrudService } from 'src/generic-crud/generic-crud.service';
import {
  GameDeveloper,
  GameDeveloperDocument,
} from './schemas/game-developer.schema';

@Injectable()
export class GameDeveloperService extends GenericCrudService<GameDeveloperDocument> {
  constructor(
    @InjectModel(GameDeveloper.name)
    readonly gameDeveloperModel: Model<GameDeveloperDocument>,
  ) {
    super(gameDeveloperModel);
  }
}
