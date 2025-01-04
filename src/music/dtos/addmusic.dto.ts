import { IsNotEmpty } from "class-validator"

export class AddMusicDto{
    @IsNotEmpty()
    musicName:string
    musicCover:string | Express.Multer.File
    @IsNotEmpty()
    artistName:string
    mimetype:string
    isVip:number
    @IsNotEmpty()
    artistId:number
    @IsNotEmpty()
    music:string | Express.Multer.File
    publicIdMusicCover:string
    publicIdMusic:string

}