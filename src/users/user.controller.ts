import { Controller , Req , Res , Body , Get , Post, Inject } from "@nestjs/common";
import { AddUserDto } from "./dtos/addUser.dto";
import { Response } from "express";
import { UserService } from "./user.service";
import { LoginUserDto } from "./dtos/loginUser.dto";

@Controller('/api')
export class UserController{
constructor(private readonly userService:UserService){}
 @Post('/registeruser')
  async registerUser(@Body() user:AddUserDto , @Res() response:Response){
   const addUserResult=await this.userService.register(user);
   response.status(201).json(addUserResult);
  }
 @Post('/loginuser')
 async loginUser(@Body() user:LoginUserDto , @Res() response:Response){
   const loginUser=await this.userService.login(user);
   response.status(200).json(loginUser)
 }
}