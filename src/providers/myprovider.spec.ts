import { Test, TestingModule } from '@nestjs/testing';
import { Myprovider } from './myprovider';

describe('Myprovider', () => {
  let provider: Myprovider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Myprovider],
    }).compile();

    provider = module.get<Myprovider>(Myprovider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
