import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../interfaces/film";
import {Filmsearch} from "../../interfaces/filmsearch";
import {StorageService} from "../../services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
  styleUrls: ['./filmlist.component.scss']
})
export class FilmlistComponent implements OnInit {

  public filmlist: Filmsearch[];
  public callback = () => {
  };

  constructor(public storage: StorageService) {
    this.callback = () => {
      this.filmlist = Object.values(this.storage.localstorage);
    };
  }

  ngOnInit() {
    console.log('pasa')
    this.filmlist = Object.values(this.storage.localstorage);
  }

}
