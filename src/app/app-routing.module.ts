import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ListadoActorComponent } from './componentes/listado-actor/listado-actor.component';
import { ListadoPeliculaComponent } from './componentes/listado-pelicula/listado-pelicula.component';

const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: 'bienvenido', component: BusquedaComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: AltaPeliculaComponent },
  { path: 'actor/alta', component: AltaActorComponent },
  { path: 'actor/listado', component: ListadoActorComponent },
  { path: 'peliculas/listado', component: ListadoPeliculaComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
