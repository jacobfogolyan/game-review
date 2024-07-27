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

    const hashedPassword = await hash(authDto.password);
    const emailEncrypt = await encrypt(authDto.email);
    const usernameEncrypt = await encrypt(authDto.username);

    const newUser = {
      ...authDto,
      password: hashedPassword,
      email: emailEncrypt,
      usernanme: usernameEncrypt,
    };

    return this.userModel.create(newUser);
  }

  // send username or email as username
  async login(
    userDto: Pick<UserDto, 'username' | 'password'>,
  ): Promise<Pick<UserDocument, 'username' | 'password' | '_id'> | undefined> {
    const { username: uName } = userDto;
    const errorMessage = 'Incorrect username or password';
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uName);

    const query = isEmail ? { email: uName } : { username: uName };

    const user = await this.userModel.findOne(query);

    if (!user) {
      throw new BadRequestException(errorMessage);
    }

    if (await compare(userDto.password, user.password)) {
      const { username, password, _id } = user;
      return {
        username,
        password,
        _id,
      };
    }
    throw new BadRequestException(errorMessage);
  }

  async findbyUsername(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }

  async findbyEmail({ email }: { email: string }): Promise<User | undefined> {
    return this.userModel.findOne({ email });
  }
}
