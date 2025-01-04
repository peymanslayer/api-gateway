import { Controller, Res, Body, Post, UploadedFiles } from '@nestjs/common';
import { Response } from 'express';
import { UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MusicService } from './services/music.service';
import { AddMusicDto } from './dtos/addmusic.dto';
import { CloudinaryService } from './services/cludinary.service';

@Controller('/api')
export class MusicController {
  constructor(
    private readonly musicService: MusicService,
    private readonly clodinaryService: CloudinaryService,
  ) {}
  @Post('/addmusic')
  @UseInterceptors(FilesInterceptor('files'))
  async addMusic(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() music: AddMusicDto,
    @Res() response: Response,
  ) {
    const storeMusicUploads = await Promise.all(
      files.map((file) => this.clodinaryService.uploadFile(file)),
    );

    const addMusic = await this.musicService.addMusic(
      music,
      storeMusicUploads
    );
    response.status(201).json(addMusic);
  }
}
