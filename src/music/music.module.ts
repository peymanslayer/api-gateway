import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MusicController } from './music.controller';
import { MusicService } from './services/music.service';
import { CloudinaryService } from './services/cludinary.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MUSIC_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'music_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ MusicController],
  providers: [ MusicService , CloudinaryService],
})
export class MusicModule {}
