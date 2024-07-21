import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  // TODO: https://github.com/kelektiv/node.bcrypt.js#readme
  async signIn(
    username: string,
    password: string,
  ): Promise<Partial<User> | undefined> {
    const user = await this.userService.findbyUsernamePassword({
      username,
      password,
    });
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const { password: userPassword, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
