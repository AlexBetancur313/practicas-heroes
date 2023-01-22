import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ImgPipe } from './pipes/img.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ListadoComponent,
    HeroeComponent,
    AgregarComponent,
    EditarComponent,
    BuscarComponent,
    ImgPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule
  ],
  exports:[
  ]
})
export class HeroesModule { }
