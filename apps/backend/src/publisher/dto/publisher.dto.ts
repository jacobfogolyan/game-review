import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class BasePublisherDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly name: string;

  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly country: string;
}

export class CreatePublisherDto extends BasePublisherDto {}

export class UpdatePublisherDto extends PartialType(BasePublisherDto) {}

export class DeletePublisherDto {
  @ApiProperty({ required: true, type: String })
  @IsString()
  readonly id: string;
}
