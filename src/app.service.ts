import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthDetails(): string {
    return 'Don\'t panic! I\'m up and running.';
  }
}
