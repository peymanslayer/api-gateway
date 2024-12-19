import { Controller , Req , Res , Body , Get , Post, Inject } from "@nestjs/common";
import { AddUserDto } from "./dtos/addUser.dto";
import { Response } from "express";
import { UserService } from "./services/user.service";


@Controller('/api')
export class UserController{
constructor(private readonly userService:UserService){}
 @Post('/addUser')
  async addUser(@Body() user:AddUserDto , @Res() response:Response){
   const addUserResult=await this.userService.addUser(user);
   response.status(201).json(addUserResult);
  }
}