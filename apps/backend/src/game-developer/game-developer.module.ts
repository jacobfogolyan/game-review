import { Module } from '@nestjs/common';
import { GameDeveloperService } from './game-developer.service';
import { GameDeveloperController } from './game-developer.controller';

@Module({
  controllers: [GameDeveloperController],
  providers: [GameDeveloperService]
})
export class GameDeveloperModule {}
