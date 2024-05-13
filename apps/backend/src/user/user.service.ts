import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById({ _id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const result = await this.userModel
      .findOneAndUpdate({ _id: id }, { $set: updateUserDto })
      .exec();

    if (!result) {
      throw new Error('No document found with the given ID');
    }

    return this.findOne(id);
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
