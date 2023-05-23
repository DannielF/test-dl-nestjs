import { Module } from '@nestjs/common';
import { UserService } from './infrastructure/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
})
export class UsersModule {}
