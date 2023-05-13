import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ICategorySearch } from './categories.interface';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async findBySearch(options: ICategorySearch): Promise<any> {
    const categories = await this.prisma.category.findMany({
      where: {
        name: {
          contains: options.where.name,
        },
      },
      include: {
        parent: {
          include: {
            parent: {
              include: {
                parent: {
                  include: {
                    parent: {
                      include: {
                        parent: {
                          include: {
                            parent: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return categories;
  }
}
