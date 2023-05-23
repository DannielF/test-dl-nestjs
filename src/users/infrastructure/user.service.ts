import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { DataSource, Repository } from 'typeorm';
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
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async getUserByTypeAndNumberDocument(
    type: string,
    number: string,
  ): Promise<User> {
    return await this.userRepository.findOneBy({
      id_type: type,
      id_number: number,
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOneBy({ email: email });
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
    return await this.userRepository.findOneBy({ id: id }).then((user) => {
      user.rol = rol;
      return this.userRepository.save(user);
    });
  }

  async updateUser(id: number, user: UpdateUserDto) {
    const userFound = await this.userRepository.preload({
      id: id,
      ...user,
    });
    if (!userFound) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getUserById(id);
    return await this.userRepository.remove(user);
  }
}
