import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';
import { Model } from 'mongoose';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

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

  findOne(id: number) {
    return this.gameModel.find({ _id: id });
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    const updatedGame = new this.gameModel(updateGameDto);
    return updatedGame.updateOne({ _id: id }, updateGameDto);
  }

  remove(id: number) {
    return this.gameModel.deleteOne({ _id: id });
  }
}
