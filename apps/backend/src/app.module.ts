import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GamesModule } from './games/games.module';

@Module({
  imports: [ConfigModule.forRoot(), GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
