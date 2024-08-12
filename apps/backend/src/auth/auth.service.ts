import { Injectable, BadRequestException } from '@nestjs/common';
import { hash } from '../user/helpers/security';
import { compare } from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';
import { CreateUserDto, UserDto } from 'src/types';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register({ username, email }: CreateUserDto): Promise<User> {
    const emailHash = await hash(email);
    const usernameHash = await hash(username);

    const userByUsername = await this.userService.findByUsername({
      username: usernameHash,
    });

    if (userByUsername) {
      new BadRequestException('User with username already exists');
    }

    const userByEmail = await this.userService.findByEmail({
      email: emailHash,
    });

    if (userByEmail) {
      new BadRequestException('User with email already exists');
    }

    const passwordHash = await hash(authDto.password);

    const query: CreateUserDto = {
      ...authDto,
      email: emailHash,
      username: usernameHash,
      password: passwordHash,
    };

    return this.userService.create(query);
  }

  // send username or email as username
  async login({
    username,
    password,
  }: Pick<UserDto, 'username' | 'password'>): Promise<{
    access_token: string;
  }> {
    const uName = await hash(username);
    const isEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(username);

    const user = isEmail
      ? await this.userService.findByEmail({ email: uName })
      : await this.userService.findByUsername({ username: uName });

    if (!user) {
      throw new BadRequestException('Incorrect username or password');
    }

    if (await compare(password, user.password)) {
      const payload = { sub: user._id, username: user.username };
      const access_token = await this.jwtService.signAsync(payload);

      return {
        access_token,
      };
    }
    throw new BadRequestException('Incorrect email or password');
  }
}
