import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherController } from './publisher.controller';
import { Publisher, PublisherSchema } from './schemas/publisher.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Publisher.name, schema: PublisherSchema },
    ]),
  ],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
