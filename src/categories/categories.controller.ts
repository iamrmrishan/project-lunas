import { Controller, Get, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('search')
  async postSearch(@Query('keyword') keyword: string): Promise<any> {
    const where: any = {};
    if (keyword) where.name = keyword.toString();
    const options = {
      where,
    };
    return this.categoriesService.findBySearch(options);
  }
}
