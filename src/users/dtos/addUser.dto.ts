import { IsEmail, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  mobile: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsString()
  token?: string;

  @IsString()
  role: string;
}
