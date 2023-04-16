import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeletePost {
  @ApiProperty()
  @IsNotEmpty({ message: 'The Post Should Have an Id In Order To Delete' })
  @IsString()
  id: string;
}
