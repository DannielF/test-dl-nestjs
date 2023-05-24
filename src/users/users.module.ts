import { Module } from '@nestjs/common';
import { UserService } from './domain/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';
import { UserController } from './infrastructure/user.controller';

/**
 * Users module
 * @class UsersModule
 * @requires TypeOrmModule
 * @requires UserService
 * @requires UserController
 * @requires User
 * @version 0.0.1
 */
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
