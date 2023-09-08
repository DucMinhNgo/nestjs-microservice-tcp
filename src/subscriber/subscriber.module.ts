import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Subscriber from './entities/subscriber.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    ConfigModule,
  ],
  controllers: [SubscriberController],
  providers: [SubscriberService],
})
export class SubscriberModule { }
