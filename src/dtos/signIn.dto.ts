import { IsEmail,IsString,IsNotEmpty,IsNumber } from "class-validator";

export class SignInDto{
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email:string

  @IsNumber()
  @IsNotEmpty()
  mobileNumber:number

  @IsNotEmpty()
  @IsString()
  password:string

  @IsNotEmpty()
  @IsString()
  name:string

  @IsNotEmpty()
  @IsString()
  lastName:string

  @IsNotEmpty()
  @IsString()
  userName:string
};