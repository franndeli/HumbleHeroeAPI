import { IsString, IsInt, Min, Max } from 'class-validator';

export interface ISuperheroes {
  name: string;
  superpower: string;
  humility_score: number;
  id?: number;
}

export class Superheroes implements ISuperheroes {
  id?: number;

  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  // The humility score should be between 0 and 10
  @Min(0)
  @Max(10)
  humility_score: number;

  constructor(
    name: string,
    superpower: string,
    humility_score: number,
    id?: number,
  ) {
    this.id = id ?? Date.now();
    this.name = name;
    this.superpower = superpower;
    this.humility_score = humility_score;
  }
}
