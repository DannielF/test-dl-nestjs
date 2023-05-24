import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../application/createUser.dto';
import { UpdateUserDto } from '../application/updateUser.dto';

/**
 * User service
 * @class UserService
 * @requires User
 * @requires Repository
 * @author dannielf
 * @version 0.0.1
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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

  async createUser(user: CreateUserDto): Promise<User> {
    return await this.userRepository.save(user);
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
