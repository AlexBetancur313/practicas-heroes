import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesInterface } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit{

constructor(private heroesService:HeroesService){}

heroes:HeroesInterface[]=[];

  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe(heroe => this.heroes = heroe)
  }

}
