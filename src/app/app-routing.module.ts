import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './heroes/pages/home/home.component';
import { PaginaErrorComponent } from './shared/pagina-error/pagina-error.component';
import { AuthModule } from './auth/auth.module';

const routes:Routes=[
  {
    path:"404",
    component: PaginaErrorComponent
  },
  {
    path:"heroes",
    component:HomeComponent,
     loadChildren:()=>
    import("./heroes/heroes.module")
    .then(m=>m.HeroesModule)
  },
  {
    path:"auth",
    loadChildren:()=>
    import("./auth/auth.module")
    .then(m => AuthModule)
  },
  {
    path:"**",
    redirectTo:"404"
  }
]


@NgModule({
imports: [
 RouterModule.forRoot(routes)
 ],
exports:[
 RouterModule
]
})
export class AppRoutingModule { }
