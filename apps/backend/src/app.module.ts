import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GamesModule } from './games/games.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DingusModule } from './dingus/dingus.module';
import { DingusModule } from './dingus/dingus.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    GamesModule,
    DingusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
