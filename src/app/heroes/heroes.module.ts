import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    EditarComponent,
    BuscarComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports:[
  ]
})
export class HeroesModule { }
