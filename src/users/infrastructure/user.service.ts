import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { DataSource, DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../application/createUser.dto';
import { UpdateUserDto } from '../application/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly datasource: DataSource,
  ) {}

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  async getUserByTypeAndNumberDocument(
    type: string,
    number: string,
  ): Promise<User> {
    return this.userRepository.findOneBy({
      id_type: type,
      id_number: number,
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  async createUser(user: CreateUserDto): Promise<void> {
    const queryRunner = this.datasource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save(user);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async addRolToUser(id: number, rol: string): Promise<User> {
    return this.userRepository.findOneBy({ id: id }).then((user) => {
      user.rol = rol;
      return this.userRepository.save(user);
    });
  }

  async updateUser(id: number, user: UpdateUserDto) {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
