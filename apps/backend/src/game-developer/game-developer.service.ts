import { Injectable } from '@nestjs/common';
import { CreateGameDeveloperDto } from './dto/create-game-developer.dto';
import { UpdateGameDeveloperDto } from './dto/update-game-developer.dto';

@Injectable()
export class GameDeveloperService {
  create(createGameDeveloperDto: CreateGameDeveloperDto) {
    return 'This action adds a new gameDeveloper';
  }

  findAll() {
    return `This action returns all gameDeveloper`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gameDeveloper`;
  }

  update(id: number, updateGameDeveloperDto: UpdateGameDeveloperDto) {
    return `This action updates a #${id} gameDeveloper`;
  }

  remove(id: number) {
    return `This action removes a #${id} gameDeveloper`;
  }
}
