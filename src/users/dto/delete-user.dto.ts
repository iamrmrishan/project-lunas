import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUser {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id: string;
}
