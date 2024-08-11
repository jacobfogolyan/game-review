import { PartialType } from '@nestjs/mapped-types';

export class BasePublisherDto {
  readonly name: string;
}

export class CreatePublisherDto extends PartialType(BasePublisherDto) {}

export class UpdatePublisherDto extends PartialType(BasePublisherDto) {}

export class DeletePublisherDto extends PartialType(BasePublisherDto) {}
