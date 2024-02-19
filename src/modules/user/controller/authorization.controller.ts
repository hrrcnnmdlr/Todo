import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginUserDto } from '../dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body(ValidationPipe) loginDto: LoginUserDto,
  ): Promise<{ accessToken: string }> {
    const accessToken = await this.authService.login(loginDto);
    if (!accessToken) {
      throw new UnauthorizedException('Неправильні облікові дані');
    }
    return { accessToken };
  }
}
