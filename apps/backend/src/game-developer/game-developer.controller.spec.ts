import { Test, TestingModule } from '@nestjs/testing';
import { GameDeveloperController } from './game-developer.controller';
import { GameDeveloperService } from './game-developer.service';

describe('GameDeveloperController', () => {
  let controller: GameDeveloperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameDeveloperController],
      providers: [GameDeveloperService],
    }).compile();

    controller = module.get<GameDeveloperController>(GameDeveloperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
