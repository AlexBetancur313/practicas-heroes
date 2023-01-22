import { Pipe, PipeTransform } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes.interfaces';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(value: string): string {
    return  `../../../assets/heroes/${value}.jpg`;
  }

}
