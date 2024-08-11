import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { GameModule } from './game/game.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';
import { GameDeveloperModule } from './game-developer/game-developer.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ArticleModule,
    GameModule,
    UserModule,
    ReviewModule,
    AuthModule,
    GameDeveloperModule,
    PublisherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
