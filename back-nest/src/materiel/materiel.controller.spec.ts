import { Test, TestingModule } from '@nestjs/testing';
import { MaterielController } from './materiel.controller';

describe('Materiel Controller', () => {
  let controller: MaterielController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaterielController],
    }).compile();

    controller = module.get<MaterielController>(MaterielController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
