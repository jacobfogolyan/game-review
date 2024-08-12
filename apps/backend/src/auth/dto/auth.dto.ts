import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class BaseAuthDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true, type: String })
  @IsStrongPassword()
  @IsString()
  readonly password: string;

  @ApiProperty({ required: true, type: String })
  @IsEmail()
  @IsString()
  readonly email: string;
}
