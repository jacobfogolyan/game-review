import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class GamesService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(createGameDto: Prisma.GameCreateInput) {
    return this.databaseService.game.create({ data: createGameDto });
  }

  findAll() {
    return this.databaseService.game.findMany();
  }

  findOne(id: string) {
    return this.databaseService.game.findUnique({ where: { id } });
  }

  update(id: string, updateGameDto: Prisma.GameUpdateInput) {
    return this.databaseService.game.update({
      where: { id },
      data: updateGameDto,
    });
  }

  remove(id: string) {
    return this.databaseService.game.delete({ where: { id } });
  }
}
