import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegistrationStatus } from './auth.interface';
import { JwtPayload } from './jwt.strategy';
import { ICreateUser, ILoginUser } from 'src/users/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async register(createUser: ICreateUser): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'ACCOUNT_CREATE_SUCCESS',
    };

    try {
      status.data = await this.usersService.createUser(createUser);
    } catch (err) {
      // Extract the error message from the caught error
      const errorMessage = err.message || 'Account creation failed';

      // Update the registration status with the error message
      status = {
        success: false,
        message: errorMessage,
      };

      // Log the error and throw an HttpException if necessary
      console.error(err);
      throw new HttpException(errorMessage, HttpStatus.BAD_REQUEST, {
        cause: err,
      });
    }

    return status;
  }

  async login(loginUser: ILoginUser): Promise<any> {
    // find user in db
    const user = await this.usersService.findByLogin(loginUser);

    // generate and sign token
    const token = this._createToken(user);

    return {
      ...token,
      data: user,
    };
  }

  private _createToken({ login }): any {
    const user: JwtPayload = { login };
    const Authorization = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      Authorization,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    const user = await this.usersService.findByPayload(payload);
    if (!user) {
      throw new HttpException('INVALID_TOKEN', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
}
