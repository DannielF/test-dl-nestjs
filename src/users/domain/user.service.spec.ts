import { Test } from '@nestjs/testing';
import { User } from './user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
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
          },
        },
      ],
    }).compile();
    userService = moduleRef.get(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of users', async () => {
      const user1 = new User();
      const user2 = new User();
      const result = [user1, user2];
      jest.spyOn(userService, 'getAll').mockImplementation(async () => result);
      expect(await userService.getAll()).toBe(result);
    });
  });

  describe('getUserById', () => {
    it('should return a user', async () => {
      const user = new User();
      user.id = 1;
      jest
        .spyOn(userService, 'getUserById')
        .mockImplementation(async () => user);
      expect(await userService.getUserById(1)).toBe(user);
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
        await userService.getUserByTypeAndNumberDocument('CC', '123456789'),
      ).toBe(user);
    });
  });
});
