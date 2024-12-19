import { Module } from "@nestjs/common";
import { ClientsModule , Transport  } from "@nestjs/microservices";
import { UserController } from "./user.controller";
import { UserService } from "./services/user.service";
@Module({
    imports: [ClientsModule.register([
        {
        name: 'USER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'users_queue',
          queueOptions: {
            durable: false
          },
        },
      }])],
    controllers: [UserController],
    providers: [UserService],
  })
  export class UserModule {}
  