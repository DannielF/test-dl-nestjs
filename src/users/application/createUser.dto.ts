import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsIn, IsOptional } from 'class-validator';

/**
 * Create user dto
 * @property {string} id_type
 * @property {string} id_number
 * @property {string} name
 * @property {string} lastName
 * @property {string} email
 * @property {string} phone
 * @property {string} address
 * @property {string} rol
 * @property {boolean} state
 * @class CreateUserDto
 * @version 0.0.1
 */
export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ enum: ['CC', 'CE', 'TI', 'PPN', 'NIT'] })
  id_type: string;

  @IsNotEmpty()
  @ApiProperty({ type: String })
  id_number: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, example: 'John' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, example: 'Doe' })
  lastName: string;

  @IsEmail()
  @ApiProperty({ type: String, example: 'jhondoe@email.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, example: '123456789' })
  phone: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, example: 'Calle 123' })
  address: string;

  @IsOptional()
  @IsIn(['admin', 'accountant', 'sofware_consultant'])
  @ApiProperty({ enum: ['admin', 'accountant', 'sofware_consultant'] })
  rol?: string;

  @IsNotEmpty()
  @ApiProperty({ type: Boolean, example: 'true/false' })
  state: boolean;
}
