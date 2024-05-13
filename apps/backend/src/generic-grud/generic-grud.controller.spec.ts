import { Test, TestingModule } from '@nestjs/testing';
import { GenericGrudController } from './generic-grud.controller';

describe('GenericGrudController', () => {
  let controller: GenericGrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenericGrudController],
    }).compile();

    controller = module.get<GenericGrudController>(GenericGrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
