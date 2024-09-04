import { Inject, Injectable } from '@nestjs/common';
import { SignInDto } from 'src/dtos/signIn.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
@Injectable()
export class UserService {
  constructor(@Inject('user-queue') private readonly userService:ClientProxy){}
  signIn(signIn:SignInDto): Observable<SignInDto> {
  const logIn  = this.userService.send<SignInDto>('signin',signIn);
  return logIn

  }
}
