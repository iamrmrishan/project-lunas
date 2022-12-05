import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { ICreateUser, ILoginUser } from './users.interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUser: ICreateUser): Promise<User> {
    const isUserExsists = await this.prisma.user.findFirst({
      where: { email: createUser.email },
    });

    if (isUserExsists) {
      throw new HttpException('user_already_exists', HttpStatus.CONFLICT);
    } else {
      return await this.prisma.user.create({
        data: {
          email: createUser.email,
          userName: createUser.userName,
          password: await hash(createUser.password, 10),
          points: "0",
        },
      });
    }
  }

  async findByLogin({ email, password }: ILoginUser): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User_Not_Exsists', HttpStatus.UNAUTHORIZED);
    }
    // compare passwords
    const areEqual = await compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid_Credentials', HttpStatus.UNAUTHORIZED);
    }
    const { password: p, ...rest } = user;
    return rest;
  }

  //use by auth module to get user in database
  async findByPayload({ email }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }

  async userFindOneByCid(id: string): Promise<any> {
    return await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        posts:true,
        reviews: true,
        comments: true,
      }
    });
  }
}
