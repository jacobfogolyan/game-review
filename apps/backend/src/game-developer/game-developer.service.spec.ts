import { Test, TestingModule } from '@nestjs/testing';
import { GameDeveloperService } from './game-developer.service';

describe('GameDeveloperService', () => {
  let service: GameDeveloperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameDeveloperService],
    }).compile();

    service = module.get<GameDeveloperService>(GameDeveloperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
