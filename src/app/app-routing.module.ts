import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FilmlistComponent} from "./components/filmlist/filmlist.component";
import {FilmsearchComponent} from "./components/filmsearch/filmsearch.component";
import {FilmComponent} from "./components/film/film.component";


const routes: Routes = [
  {path: '', component: FilmsearchComponent},
  {path: 'list', component: FilmlistComponent},
  {path: 'film/:uuid', component: FilmComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
