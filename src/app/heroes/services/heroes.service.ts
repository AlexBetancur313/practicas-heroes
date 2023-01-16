import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeroesInterface } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes():Observable<HeroesInterface[]>{
    return this.http.get<HeroesInterface[]>("http://localhost:3000/heroes")
  }
}
