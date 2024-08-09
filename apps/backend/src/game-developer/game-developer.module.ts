import { Module } from '@nestjs/common';
import { GameDeveloperService } from './game-developer.service';
import { GameDeveloperController } from './game-developer.controller';
import {
  GameDeveloper,
  GameDeveloperSchema,
} from './schemas/game-developer.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GameDeveloper.name, schema: GameDeveloperSchema },
    ]),
  ],
  controllers: [GameDeveloperController],
  providers: [GameDeveloperService],
})
export class GameDeveloperModule {}
