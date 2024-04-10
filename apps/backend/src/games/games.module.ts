import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { DatabaseService } from 'src/database/database.service';
@Module({
  controllers: [GamesController],
  providers: [GamesService, DatabaseService],
})
export class GamesModule {}
