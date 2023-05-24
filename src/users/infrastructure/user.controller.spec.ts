import { UserController } from './user.controller';
import { UserService } from '../domain/user.service';
import { Test } from '@nestjs/testing';
import { User } from '../domain/user.entity';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getAll: jest.fn(() => [User]),
            getUserById: jest.fn(() => {
              const user = new User();
              user.id = 1;
              return user;
            }),
            getUserByTypeAndNumberDocument: jest.fn(() => {
              const user = new User();
              user.id = 1;
              user.id_type = 'CC';
              user.id_number = '123456789';
              return user;
            }),
            getUserByEmail: jest.fn(() => User),
            createUser: jest.fn(() => User),
            updateUser: jest.fn(() => User),
            deleteUser: jest.fn(() => User),
          },
        },
      ],
    }).compile();
    userController = moduleRef.get(UserController);
    userService = moduleRef.get(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of users', async () => {
      const user1 = new User();
      const user2 = new User();
      const result = [user1, user2];
      jest.spyOn(userService, 'getAll').mockImplementation(async () => result);
      expect(await userController.getAll()).toBe(result);
    });
  });

  describe('getUserById', () => {
    it('should return a user', async () => {
      const user = new User();
      user.id = 1;
      jest
        .spyOn(userService, 'getUserById')
        .mockImplementation(async () => user);
      expect(await userController.getUserById(1)).toBe(user);
    });
  });

  describe('getUserByTypeAndNumberDocument', () => {
    it('should return a user', async () => {
      const user = new User();
      user.id = 1;
      user.id_type = 'CC';
      user.id_number = '123456789';
      jest
        .spyOn(userService, 'getUserByTypeAndNumberDocument')
        .mockImplementation(async () => user);
      expect(
        await userController.getUserByTypeAndNumberDocument('CC', '123456789'),
      ).toBe(user);
    });
  });
});
