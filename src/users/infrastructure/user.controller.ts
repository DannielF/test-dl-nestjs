import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../domain/user.service';
import { CreateUserDto } from '../application/createUser.dto';
import { UpdateUserDto } from '../application/updateUser.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

@Controller({ path: 'users', version: '1' })
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  private readonly logger = new Logger(UserController.name);

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Users found' })
  @ApiNotFoundResponse({ description: 'Users not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getAll() {
    this.logger.log('Get all users');
    return await this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ name: 'id', type: Number, required: true })
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserById(id);
  }

  @Get('get-by/:type/:number')
  @ApiOperation({ summary: 'Get user by type and number document' })
  @ApiParam({ name: 'type', type: String, required: true })
  @ApiParam({ name: 'number', type: String, required: true })
  async getUserByTypeAndNumberDocument(
    @Param('type') type: string,
    @Param('number') number: string,
  ) {
    return await this.userService.getUserByTypeAndNumberDocument(type, number);
  }

  @Get('get-by-email/:email')
  @ApiOperation({ summary: 'Get user by email' })
  @ApiParam({ name: 'email', type: String, required: true })
  async getUserByEmail(@Param('email') email: string) {
    return await this.userService.getUserByEmail(email);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiCreatedResponse({ description: 'User created' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiBody({ type: CreateUserDto, required: true })
  async createUser(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Post('add-rol/:id/:rol')
  @ApiResponse({ status: 201, description: 'Rol added' })
  @ApiOperation({ summary: 'Add rol to user' })
  @ApiParam({ name: 'id', type: Number, required: true })
  @ApiParam({ name: 'rol', type: String, required: true })
  async addRolToUser(
    @Param('id', ParseIntPipe) id: number,
    @Param('rol') rol: string,
  ) {
    return await this.userService.addRolToUser(id, rol);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUserDto, required: true })
  @ApiOkResponse({ description: 'User updated' })
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({ name: 'id', type: Number, required: true })
  async deleteUser(id: number) {
    return await this.userService.deleteUser(id);
  }
}
