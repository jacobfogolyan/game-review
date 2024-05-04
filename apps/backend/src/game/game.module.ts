import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameSchemaDocument, GameSchema } from './schemas/game.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GameSchemaDocument.name, schema: GameSchema }]),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
