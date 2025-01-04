import { IsNotEmpty , IsEmail , IsNumber , IsString} from "class-validator";

export class LoginUserDto{
 @IsNotEmpty()
 mobile:number

 @IsNotEmpty()
 password:string
}