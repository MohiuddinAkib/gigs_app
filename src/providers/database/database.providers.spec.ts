import { Test, TestingModule } from '@nestjs/testing';
import { Database.Providers } from './database.providers';

describe('Database.Providers', () => {
  let provider: Database.Providers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Database.Providers],
    }).compile();

    provider = module.get<Database.Providers>(Database.Providers);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
