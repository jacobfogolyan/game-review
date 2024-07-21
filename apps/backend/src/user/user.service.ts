import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { GenericCrudService } from '../generic-crud/generic-crud.service';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService extends GenericCrudService<UserDocument> {
  constructor(@InjectModel(User.name) readonly userModel: Model<UserDocument>) {
    super(userModel);
  }

  async create(userDto: UserDto): Promise<UserDocument> {
    const saltOrRounds = 10;
    const password = userDto.password;

    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const newUser = {
      ...userDto,
      password: hashedPassword,
    };

    return this.userModel.create(newUser);
  }

  async findbyUsername({
    username,
  }: {
    username: string;
  }): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
