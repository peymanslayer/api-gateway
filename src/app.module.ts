import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MusicModule } from './music/music.module';

@Module({
  imports: [UserModule , MusicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
