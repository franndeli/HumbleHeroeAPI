import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Superheroes, ISuperheroes } from '../data/superheroes';

@Controller('superheroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSuperheroes(): Superheroes[] {
    return this.appService.getSuperheroes();
  }

  @Post()
  postSuperheroes(@Body() superhero: ISuperheroes): Superheroes {
    return this.appService.postSuperheroes(superhero);
  }
}
