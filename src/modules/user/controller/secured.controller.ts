import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../middlewares/jwt-auth.guard';

@Controller('secured')
export class SecuredController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getSecuredData() {
    return { message: 'Дані доступні тільки авторизованим користувачам' };
  }
}
