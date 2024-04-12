import type { Document } from 'mongoose';
import type { GameDto } from '../dto';
export interface IGame extends Document {
  readonly id: number;
  readonly title: string;
  readonly description?: string | null;
  readonly releaseDate?: Date | null;
  readonly genre?: string | null;
  readonly platform?: string | null;
  readonly publisher?: string | null;
  readonly developer?: string | null;
}

export type games = Pick<GameDto, 'id'>;
