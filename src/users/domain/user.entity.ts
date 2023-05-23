import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_type', type: 'varchar', length: 20 })
  @IsNotEmpty()
  id_type: string;

  @Column({ name: 'id_number', type: 'varchar', length: 20 })
  @IsNotEmpty()
  id_number: string;

  @Column({ name: 'name', type: 'varchar', length: 20 })
  @IsNotEmpty()
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 20 })
  @IsNotEmpty()
  lastName: string;

  @Column({ name: 'email', type: 'varchar', length: 20 })
  @IsEmail()
  email: string;

  @Column({ name: 'phone', type: 'varchar', length: 20 })
  @IsNotEmpty()
  phone: string;

  @Column({ name: 'address', type: 'varchar', length: 20 })
  @IsNotEmpty()
  address: string;

  @Column({ name: 'rol', type: 'varchar', length: 20 })
  @IsIn(['admin', 'accountant', 'sofware_consultant'])
  rol?: string;

  @Column({ name: 'state', type: 'boolean' })
  @IsNotEmpty()
  state: boolean;
}
