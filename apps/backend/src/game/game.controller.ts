import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto, UpdateGameDto } from './dto/game.dto';

@Controller('game')
export class GameController {
  constructor(private gameService: GameService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  async findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
