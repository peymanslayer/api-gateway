import { Injectable } from '@nestjs/common';
import * as cloudinary from 'cloudinary';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {}

  async uploadFile(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader
        .upload_stream(
          { folder: 'uploads' },
          (error: UploadApiErrorResponse, result: UploadApiResponse) => {
            if (error) {
              // Reject the promise with the error response
              reject(error);
            } else {
              // Resolve the promise with the successful result
              resolve(result);
            }
          },
        )
        .end(file.buffer); // Start the stream upload with the file's buffer
    });
  }

  async deleteImage(publicId: string): Promise<{ result: string }> {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.destroy(publicId, (error, result) => {
        if (error) {
          console.log(error);
          
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
