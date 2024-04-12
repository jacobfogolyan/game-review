import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IGame } from './types';
import type { Model } from 'mongoose';
import type { GameDto } from './dto';

type games = Pick<GameDto, 'id'>;
@Injectable()
export class GamesService {
  constructor(@InjectModel('Games') private gameModel: Model<IGame>) {}

  async create(createGameDto: GameDto) {
    return this.gameModel.create({ data: createGameDto });
  }

  async findAll() {
    return this.gameModel.find();
  }

  async findOne(id: games) {
    return this.gameModel.findOne({ _id: id });
  }

  async update(id: games) {
    return this.gameModel.updateOne({ _id: id });
  }

  async remove(id: games) {
    return this.gameModel.deleteOne({ _id: id });
  }
}
