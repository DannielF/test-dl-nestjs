import { IsNotEmpty, IsEmail, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id_type: string;

  @IsNotEmpty()
  id_number: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsIn(['admin', 'accountant', 'sofware_consultant'])
  rol?: string;

  @IsNotEmpty()
  state: boolean;
}
