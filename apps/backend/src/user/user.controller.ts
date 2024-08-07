import { Body, Controller, Get } from '@nestjs/common';
import { GenericCrudController } from '../generic-crud/generic-crud.controller';
import { UserDocument } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController extends GenericCrudController<UserDocument> {
  constructor(readonly userService: UserService) {
    super(userService);
  }

  @Get('/username')
  findbyUsername(@Body() username: string) {
    return this.userService.findByUsername(username);
  }
}
