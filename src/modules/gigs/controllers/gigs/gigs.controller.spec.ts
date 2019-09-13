import { Test, TestingModule } from '@nestjs/testing';
import { GigsController } from './gigs.controller';

describe('Gigs Controller', () => {
  let controller: GigsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GigsController],
    }).compile();

    controller = module.get<GigsController>(GigsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
