import { ExceptionFilter,Catch,ArgumentsHost,HttpException,HttpStatus } from "@nestjs/common";
import { ResponseDto } from "src/dtos/response.dto";
import { HttpAdapterHost } from "@nestjs/core";


@Catch()
export class UserFilter implements ExceptionFilter{
    constructor(private readonly httpAdaptor:HttpAdapterHost){}

    catch(exception: unknown, host: ArgumentsHost):ResponseDto {
      const ctx=host.switchToHttp();
      const httpStatus=exception instanceof HttpException
        ? exception.getStatus()
        :HttpStatus.INTERNAL_SERVER_ERROR;
      const message='something is Wrong';

      return{
        statusCode:httpStatus,
        message:message
      }

    }
}