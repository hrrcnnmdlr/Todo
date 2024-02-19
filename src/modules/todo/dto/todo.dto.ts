import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;
}
