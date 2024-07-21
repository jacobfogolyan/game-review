import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { GenericCrudService } from '../generic-crud/generic-crud.service';

@Injectable()
export class UserService extends GenericCrudService<UserDocument> {
  constructor(@InjectModel(User.name) readonly userModel: Model<UserDocument>) {
    super(userModel);
  }

  async findbyUsername({
    username,
  }: {
    username: string;
  }): Promise<User | undefined> {
    return this.userModel.findOne({ username });
  }
}
