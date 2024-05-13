import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly name: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly description?: string;

  @MaxLength(5, {
    each: true,
  })
  permissions?: string[];

  @MaxLength(5, {
    each: true,
  })
  members?: number[];
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {}
