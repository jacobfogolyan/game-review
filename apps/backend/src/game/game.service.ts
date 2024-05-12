import { Injectable } from '@nestjs/common';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';
import { Model } from 'mongoose';

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

  async remove(id: string) {
    return this.gameModel.deleteOne({ _id: id });
  }
}
