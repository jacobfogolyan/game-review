import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GameDeveloperService } from './game-developer.service';
import { CreateGameDeveloperDto } from './dto/create-game-developer.dto';
import { UpdateGameDeveloperDto } from './dto/update-game-developer.dto';

@Controller('game-developer')
export class GameDeveloperController {
  constructor(private readonly gameDeveloperService: GameDeveloperService) {}

  @Post()
  create(@Body() createGameDeveloperDto: CreateGameDeveloperDto) {
    return this.gameDeveloperService.create(createGameDeveloperDto);
  }

  @Get()
  findAll() {
    return this.gameDeveloperService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameDeveloperService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDeveloperDto: UpdateGameDeveloperDto) {
    return this.gameDeveloperService.update(+id, updateGameDeveloperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameDeveloperService.remove(+id);
  }
}
