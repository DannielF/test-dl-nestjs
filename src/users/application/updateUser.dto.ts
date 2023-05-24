import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number, required: true })
  id: number;
}
