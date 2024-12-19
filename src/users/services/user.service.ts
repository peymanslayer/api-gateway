import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { AddUserDto } from "../dtos/addUser.dto";
@Injectable()
export class UserService{
  constructor(@Inject('USER_SERVICE') private readonly client:ClientProxy){}

  async addUser(user:AddUserDto):Promise<AddUserDto>{
   const addUser:AddUserDto=await this.client.send('register',user).toPromise();
   return addUser;

  }
}