import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const msg = exception.getResponse();
    const error =msg['error']
    const errorMessage =msg['message']
    response
      .status(status)
      .json({
          status :{
            code: status,
            header :'Unable to proceed',
            description:error,
            moreInfo:errorMessage
          },
       data:null
      });
  }
}