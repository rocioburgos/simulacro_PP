import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component'; 
import { AltaActorComponent } from './componentes/alta-actor/alta-actor.component';
import { ListadoActorComponent } from './componentes/listado-actor/listado-actor.component';
import { ListadoPeliculaComponent } from './componentes/listado-pelicula/listado-pelicula.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { TablaActorComponent } from './componentes/tabla-actor/tabla-actor.component';
import { PeliculaActorComponent } from './componentes/pelicula-actor/pelicula-actor.component';
@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent, 
    AltaActorComponent,
    ListadoActorComponent,
    ListadoPeliculaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    PeliculaAltaComponent,
    TablaActorComponent,
    PeliculaActorComponent 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
