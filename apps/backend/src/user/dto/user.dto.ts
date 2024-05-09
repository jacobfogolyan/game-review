export class UserDto {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  members: number[];
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {}
