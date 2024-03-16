import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './users.events';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreate(data: CreateUserEvent) {
    console.log('Handled user - COMMUNICATION', data);
  }
}
