import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriberService: SubscriberService) { }

  // microservices layer
  @MessagePattern({ cmd: 'add-subscriber' })
  addSubscriber(subscriber: CreateSubscriberDto) {
    return this.subscriberService.addSubscriber(subscriber);
  }

  @MessagePattern({ cmd: 'get-all-subscribers' })
  getAllSubscribers() {
    return this.subscriberService.getAllSubscribers();
  }

  // http layer
  @Post()
  create(@Body() createSubscriberDto: CreateSubscriberDto) {
    return this.subscriberService.create(createSubscriberDto);
  }

  @Get()
  findAll() {
    return this.subscriberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriberService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscriberDto: UpdateSubscriberDto) {
    return this.subscriberService.update(+id, updateSubscriberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriberService.remove(+id);
  }
}
