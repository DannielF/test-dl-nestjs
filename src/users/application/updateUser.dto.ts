import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './createUser.dto';

export class UpdateUserDto extends CreateUserDto {
  @IsNotEmpty()
  id: number;
}
