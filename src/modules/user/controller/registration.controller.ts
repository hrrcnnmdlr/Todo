import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(
    @Body(ValidationPipe) createUserDto: CreateUserDto,
  ): Promise<void> {
    await this.userService.createUser(createUserDto);
  }
}
