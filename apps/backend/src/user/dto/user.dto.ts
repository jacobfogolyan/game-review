import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsString,
  IsArray,
  ArrayMaxSize,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UserDto {
  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly firstName: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly lastName: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(255)
  readonly username: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  readonly password: string;

  @ApiProperty({ required: true, type: String })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiPropertyOptional({ type: [String], isArray: true })
  @IsArray()
  @ArrayMaxSize(5)
  @IsString({ each: true })
  @IsOptional()
  readonly permissions?: string[];

  // friends
  @ApiPropertyOptional({ type: [Number], isArray: true })
  @IsNumber({}, { each: true })
  @MaxLength(255, { each: true })
  @IsOptional()
  readonly members?: number[];

  // TODO: add teamMembers functionality
  @ApiPropertyOptional({ type: [Number], isArray: true })
  @IsNumber({}, { each: true })
  @MaxLength(255, { each: true })
  @IsOptional()
  readonly teamMembers?: number[];
}

export class CreateUserDto extends UserDto {}

export class UpdateUserDto extends UserDto {}
