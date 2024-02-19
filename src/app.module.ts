import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './modules/todo/todo.module';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './modules/user/user.module';
import { ErrorInterceptor } from './modules/interceptors/error.interceptor';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_secret_key', // Повинно співпадати з ключем, який ви використовували для підпису JWT
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TodoModule,
    UserModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ErrorInterceptor,
    },
  ],
})
export class AppModule {}
