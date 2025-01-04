import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AddUserDto } from "./dtos/addUser.dto";
import { LoginUserDto } from "./dtos/loginUser.dto";
@Injectable()
export class UserService{
  constructor(@Inject('USER_SERVICE') private readonly client:ClientProxy){}

  async register(user:AddUserDto):Promise<AddUserDto>{
   const addUser:AddUserDto=await this.client.send('register',user).toPromise();
   return addUser;

  }

  async login(user:LoginUserDto):Promise<AddUserDto>{
   const login:AddUserDto=await this.client.send('login',user).toPromise();
   return login
  }


}