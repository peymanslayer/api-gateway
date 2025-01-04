import { IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  mobile: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  role: string;
}
