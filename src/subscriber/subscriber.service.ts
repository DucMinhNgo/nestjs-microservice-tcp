import { Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Subscriber from './entities/subscriber.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriberService {
  constructor(
    @InjectRepository(Subscriber)
    private subscribersRepository: Repository<Subscriber>,
  ) { }

  async addSubscriber(subscriber: CreateSubscriberDto) {
    const newSubscriber = await this.subscribersRepository.create(subscriber);
    await this.subscribersRepository.save(newSubscriber);
    return newSubscriber;
  }

  async getAllSubscribers() {
    // return this.subscribersRepository.find();
    return [
      {
        id: 1,
        name: 'Dustin Pro'
      }
    ]
  }

  create(createSubscriberDto: CreateSubscriberDto) {
    return 'This action adds a new subscriber';
  }

  findAll() {
    return `This action returns all subscriber`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  update(id: number, updateSubscriberDto: UpdateSubscriberDto) {
    return `This action updates a #${id} subscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
