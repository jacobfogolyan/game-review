import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { UserDto } from './dto/user.dto';
import { encrypt, hash } from './helpers/security';
import { compare } from 'bcrypt';
import { BaseAuthDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class UserService extends GenericCrudService<UserDocument> {
  constructor(@InjectModel(User.name) readonly userModel: Model<UserDocument>) {
    super(userModel);
  }

  async create(authDto: BaseAuthDto): Promise<UserDocument> {
    if (!authDto.email) {
      throw new BadRequestException('missing email');
    }
    if (!authDto.username) {
      throw new BadRequestException('missing username');
    }
    if (!authDto.password) {
      throw new BadRequestException('missing password');
    }

    return this.userModel.create(authDto);
  }

  // send username or email as username
  async login(
    userDto: Pick<UserDto, 'username' | 'password'>,
  ): Promise<Pick<UserDocument, 'username' | 'password' | '_id'> | undefined> {
    const user = await this.userModel.findOne({ username: userDto.username });

    if (!user) {
      throw new BadRequestException('user not found');
    }

    if (await compare(userDto.password, user.password)) {
      const { username, password, _id } = user;
      return {
        username,
        password,
        _id,
      };
    }
    throw new BadRequestException('Incorrect username or password');
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }
}
