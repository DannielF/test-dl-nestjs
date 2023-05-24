import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User entity
 * @class User
 * @property {number} id - primary key
 * @property {string} id_type - CC, CE, TI, PPN, NIT
 * @property {string} id_number - user id number
 * @property {string} name - user name
 * @property {string} lastName - user last name
 * @property {string} email - user email
 * @property {string} phone - user phone
 * @property {string} address - user address
 * @property {boolean} state - user state
 * @enum {string} rol - admin, accountant, sofware_consultant
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_type', type: 'varchar', length: 20 })
  id_type: string;

  @Column({ name: 'id_number', type: 'varchar', length: 20 })
  id_number: string;

  @Column({ name: 'name', type: 'varchar', length: 20 })
  name: string;

  @Column({ name: 'last_name', type: 'varchar', length: 20 })
  lastName: string;

  @Column({ name: 'email', type: 'varchar', length: 20 })
  email: string;

  @Column({ name: 'phone', type: 'varchar', length: 20 })
  phone: string;

  @Column({ name: 'address', type: 'varchar', length: 20 })
  address: string;

  @Column({ name: 'rol', type: 'varchar', length: 20, nullable: true })
  rol?: string;

  @Column({ name: 'state', type: 'boolean' })
  state: boolean;
}
