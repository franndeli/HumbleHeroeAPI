import { Injectable } from '@nestjs/common';
import { Superheroes, ISuperheroes } from '../data/superheroes';

@Injectable()
export class AppService {
  private superheroes: Superheroes[] = [];

  getSuperheroes(): Superheroes[] {
    // Simple way to sort the array in descending order
    this.superheroes.sort((a, b) => b.humility_score - a.humility_score);
    return this.superheroes;
  }

  postSuperheroes(superhero: ISuperheroes): Superheroes {
    console.log(superhero);
    const newSuperhero = new Superheroes(
      superhero.name,
      superhero.superpower,
      superhero.humility_score,
    );
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }
}
