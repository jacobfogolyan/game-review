import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { GameSchemaDocument } from './schemas/game.schema';
import { Model } from 'mongoose';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(GameSchemaDocument.name)
    private gameModel: Model<GameSchemaDocument>,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<GameSchemaDocument> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }

  async findAll(): Promise<GameSchemaDocument[]> {
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
