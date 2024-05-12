import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';
import { Model } from 'mongoose';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }

  async findOne(id: string): Promise<Game> {
    return this.gameModel.findById(id);
  }

  async update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    const result = await this.gameModel
      .findOneAndUpdate({ _id: id }, { $set: updateGameDto })
      .exec();

    if (!result) {
      throw new Error('No document found with the given ID');
    }

    return this.findOne(id);
  }

  remove(id: number) {
    return this.gameModel.deleteOne({ _id: id });
  }
}
