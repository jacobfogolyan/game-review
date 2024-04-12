import { IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

export class GameDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description?: string | null;

  @IsDate()
  @IsOptional()
  readonly releaseDate?: Date | null;

  @IsString()
  @IsOptional()
  readonly genre?: string | null;

  @IsString()
  @IsOptional()
  readonly platform?: string | null;

  @IsString()
  @IsOptional()
  readonly publisher?: string | null;

  @IsString()
  @IsOptional()
  readonly developer?: string | null;
}
