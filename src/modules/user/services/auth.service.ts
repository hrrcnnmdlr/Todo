// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginUserDto): Promise<string | null> {
    const { email, password } = loginDto;
    const user = await this.userService.findByEmail(email);
    if (
      !user ||
      !(await this.userService.comparePasswords(password, user.password))
    ) {
      return null;
    }
    const accessToken = await this.generateToken(user.id);
    return accessToken;
  }

  async generateToken(userId: number): Promise<string> {
    const payload = { userId };
    return this.jwtService.signAsync(payload);
  }
}
