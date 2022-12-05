import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteUser {
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
