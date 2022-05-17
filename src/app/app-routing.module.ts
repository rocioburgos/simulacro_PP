import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component'; 
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ListadoActorComponent } from './componentes/listado-actor/listado-actor.component';
import { ListadoPeliculaComponent } from './componentes/listado-pelicula/listado-pelicula.component';
import { PeliculaActorComponent } from './componentes/pelicula-actor/pelicula-actor.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';

const routes: Routes = [
  { path: '', component: BusquedaComponent },
  { path: 'bienvenido', component: BusquedaComponent },
  { path: 'busqueda', component: BusquedaComponent }, 
  { path: 'actor/alta', component: AltaActorComponent },
  { path: 'actor/listado', component: ListadoActorComponent },
  { path: 'peliculas/listado', component: ListadoPeliculaComponent },
  {path:  'peliculas/alta', component: PeliculaAltaComponent},
  {path:  'peliculaActor', component:PeliculaActorComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
