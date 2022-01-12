import { Body, Controller, Get, Post ,
  UseFilters,
  UseInterceptors} from '@nestjs/common';
import { response } from 'express';
import { HttpExceptionFilter } from 'src/utils/errorHandle';
import { NotFoundInterceptor } from 'src/utils/errorNotFound';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './schemas/cat.schema';
import { buildErrorResponse } from '../utils/erroBlock'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
      await this.catsService.create(createCatDto)
  }

  @Get()
@UseInterceptors(NotFoundInterceptor)
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async findAll(){
    const responseData = await this.catsService.findAll();
    if(responseData.length>0){
      return {
        status:{
          code :1000,
          header:'Success',
          description:'Success'
        },
        data:responseData
      }
    }
    return buildErrorResponse(responseData);
  }
}
