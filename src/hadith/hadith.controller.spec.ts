import { Test, TestingModule } from '@nestjs/testing';
import { HadithController } from './hadith.controller';

describe('HadithController', () => {
  let controller: HadithController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HadithController],
    }).compile();

    controller = module.get<HadithController>(HadithController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
