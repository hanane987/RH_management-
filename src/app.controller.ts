import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'validate_user' })
  validateUser(data: { token: string }) {
    return { isValid: true, userId: 123 };
  }
}
