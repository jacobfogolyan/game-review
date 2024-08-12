import { Body, Controller, Get } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { UserDocument } from './schemas/user.schema';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('user')
@ApiTags('User')
export class UserController extends GenericCrudController<
  UserDocument,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(readonly userService: UserService) {
    super(userService);
  }

  @Get('/username')
  findbyUsername(@Body() username: string) {
    return this.userService.findByUsername({ username });
  }
}
