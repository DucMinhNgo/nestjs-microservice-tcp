import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriberModule } from './subscriber/subscriber.module';
import * as Joi from '@hapi/joi';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from 'rxjs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscriber]),
    DatabaseModule,
    SubscriberModule, ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
