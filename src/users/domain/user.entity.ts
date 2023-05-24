import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
