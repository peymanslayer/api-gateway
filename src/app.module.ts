import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './services/user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [ClientsModule.register([{
    name:'user-queue',
    transport:Transport.RMQ,
  }])],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
