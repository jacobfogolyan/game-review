import { Test, TestingModule } from '@nestjs/testing';
import { GenericCrudController } from './generic-crud.controller';

describe('GenericCrudController', () => {
  let controller: GenericCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenericCrudController],
    }).compile();

    controller = module.get<GenericCrudController>(GenericCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
