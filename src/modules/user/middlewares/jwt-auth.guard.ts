import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticationError } from 'passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err: Error, user: any, info: AuthenticationError) {
    // Response from Passport in case of error or authentication failure
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    // Response in case of successful authentication
    return user;
  }
}
