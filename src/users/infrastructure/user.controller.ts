import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../application/createUser.dto';
import { UpdateUserDto } from '../application/updateUser.dto';

@Controller({ path: 'users', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new Logger(UserController.name);

  @Get()
  async getAll() {
    this.logger.log('Get all users');
    return this.userService.getAll();
  }

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  @Get('get-by/:type/:number')
  async getUserByTypeAndNumberDocument(
    @Param('type') type: string,
    @Param('number') number: string,
  ) {
    return this.userService.getUserByTypeAndNumberDocument(type, number);
  }

  @Get('get-by-email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Post('add-rol/:id/:rol')
  async addRolToUser(
    @Param('id', ParseIntPipe) id: number,
    @Param('rol') rol: string,
  ) {
    return this.userService.addRolToUser(id, rol);
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }
}
