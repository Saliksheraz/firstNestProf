import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { BooksService } from './books.service';

@Controller('volume')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllVolumes() {
    return this.booksService.getVolumes();
  }

  @Get(':id')
  getVolume(@Param('id') volID: string) {
    return this.booksService.getoneVolume(volID);
  }
  @Post()
  createVolume(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.booksService.createVolume(
        prodTitle,
        prodDesc,
        prodPrice,
      );
      return { id: generatedId };
  }
}
