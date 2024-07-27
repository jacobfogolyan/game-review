import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { encrypt, hash } from '../user/helpers/security';

import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { BaseAuthDto } from './dto/auth.dto';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(authDto: BaseAuthDto): Promise<User> {
    const user = await this.userService.findbyUsername(authDto.username);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    return this.userService.create(authDto);
  }

  // send username or email as username
  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.login({
      username,
      password,
    });

    const encrytPassword = await hash(password);

    if (user?.password !== encrytPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
    };
  }
}
