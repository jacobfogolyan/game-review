import { Test, TestingModule } from '@nestjs/testing';
import { GenericGrudService } from './generic-grud.service';

describe('GenericGrudService', () => {
  let service: GenericGrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenericGrudService],
    }).compile();

    service = module.get<GenericGrudService>(GenericGrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
