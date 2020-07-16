import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import { GridComponent } from './widgets/grid/grid.component';
import {RouterModule} from "@angular/router";
import { ItemComponent } from './widgets/grid/item/item.component';
import { FilmlistComponent } from './components/filmlist/filmlist.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmsearchComponent } from './components/filmsearch/filmsearch.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    GridComponent,
    ItemComponent,
    FilmlistComponent,
    FilmsearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
