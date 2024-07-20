import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsArray,
  ArrayMaxSize,
  IsNumber,
} from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly lastName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  permissions?: string[];

  // friends
  @MaxLength(255, {
    each: true,
  })
  @IsNumber({}, { each: true })
  members?: number[];

  @MaxLength(255, {
    each: true,
  })
  @IsNumber({}, { each: true })
  teamMembers?: number[];
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {}
