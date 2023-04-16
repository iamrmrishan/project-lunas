import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [AuthModule, UsersModule, PostsModule],
  controllers: [AppController, UsersController, CategoriesController],
  providers: [AppService, UsersService, PrismaService, CategoriesService],
})
export class AppModule {}
