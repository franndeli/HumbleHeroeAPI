import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ISuperheroes } from '../data/superheroes';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return an empty array initially', () => {
    expect(appController.getSuperheroes()).toEqual([]);
  });

  it('should add a new superhero and return it', () => {
    const newSuperhero: ISuperheroes = {
      name: 'Iron Man',
      superpower: 'Genius-level intellect',
      humility_score: 5,
    };

    const result = appController.postSuperheroes(newSuperhero);
    expect(result).toMatchObject(newSuperhero);
    expect(appController.getSuperheroes().length).toBe(1);
  });
});
