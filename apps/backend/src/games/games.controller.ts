import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GamesService } from './games.service';
import type { GameDto } from './dto';
import type { games } from './types';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() createGameDto: GameDto) {
    return this.gamesService.create(createGameDto);
  }

  createMultiple(createGameDtos: GameDto[]) {
    const createdGames = [];
    for (const gameDto of createGameDtos) {
      const createdGame = this.gamesService.create(gameDto);
      createdGames.push(createdGame);
    }
    return createdGames;
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: games) {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') @Body() id: Pick<GameDto, 'id'>) {
    return this.gamesService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id: Pick<GameDto, 'id'>) {
    return this.gamesService.remove(id);
  }
}
