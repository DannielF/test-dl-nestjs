import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';
import { ApiProperty } from '@nestjs/swagger';

/**
 * Update user dto
 * @property {number} id
 * @class UpdateUserDto
 * @version 0.0.1
 */
export class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ type: Number, required: true })
  id: number;
}
