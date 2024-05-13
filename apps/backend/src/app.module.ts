import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './game/game.module';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { GenericGrudService } from './generic-grud/generic-grud.service';
import { GenericGrudController } from './generic-grud/generic-grud.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    GameModule,
    UserModule,
    ArticleModule,
  ],
  controllers: [AppController, GenericGrudController],
  providers: [AppService, GenericGrudService],
})
export class AppModule {}
