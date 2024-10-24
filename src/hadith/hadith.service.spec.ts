import { Test, TestingModule } from '@nestjs/testing';
import { HadithService } from './hadith.service';

describe('HadithService', () => {
  let service: HadithService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HadithService],
    }).compile();

    service = module.get<HadithService>(HadithService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
