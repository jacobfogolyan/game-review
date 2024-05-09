import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return this.create(createUserDto);
  }

  findAll() {
    return this.findAll();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.remove(id);
  }
}
