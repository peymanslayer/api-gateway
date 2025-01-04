import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AddMusicDto } from '../dtos/addmusic.dto';
import * as cloudinary from 'cloudinary';
import { CloudinaryService } from './cludinary.service';
import { ResultDto } from '../dtos/result.dto';

@Injectable()
export class MusicService {
  constructor(
    @Inject('MUSIC_SERVICE') private readonly client: ClientProxy,
    private readonly clouldinaryService: CloudinaryService,
  ) {
    cloudinary.v2.config({
      cloud_name: 'dcwlg8bix',
      api_key: '645267841356858',
      api_secret: '6ah89sTBDsoMPukcpcnY-ZDGWnU',
    });
  }

  async addMusic(
    addMusic: AddMusicDto,
    detailOfUpload: Array<
      cloudinary.UploadApiResponse | cloudinary.UploadApiErrorResponse
    >,
  ): Promise<ResultDto> {
    addMusic.musicCover = detailOfUpload[0].secure_url;
    addMusic.publicIdMusicCover =String(detailOfUpload[0].public_id);
    addMusic.music = detailOfUpload[1].secure_url;
    addMusic.publicIdMusic = String(detailOfUpload[1].public_id);
    const createMusic: ResultDto = await this.client
      .send('addmusic', addMusic)
      .toPromise();
    if (createMusic.message instanceof String) {
      await this.addMusicProcess(addMusic);
    }

    return createMusic;
  }

  async addMusicProcess(addMusic: AddMusicDto): Promise<void> {
    const deleteMusicCoverFromCloud = await this.clouldinaryService.deleteImage(
      addMusic.publicIdMusicCover,
    );
    const deleteMusicFromCloud = await this.clouldinaryService.deleteImage(
      addMusic.publicIdMusic,
    );
  }
}
