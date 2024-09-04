import { Controller, Get, Post,Req,Res } from '@nestjs/common';
import { UserService } from './services/user.service';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { SignInDto } from './dtos/signIn.dto';
@Controller()
export class AppController {
  constructor(private readonly userservice: UserService) {}

  @Post()
  signIn(@Req() req:Request,@Res() res:Response): Observable<SignInDto> {
    return this.userservice.signIn(req.body);
  }
}
