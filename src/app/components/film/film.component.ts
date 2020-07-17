import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Film} from "../../interfaces/film";
import {container} from "@angular/core/src/render3/instructions";
import {StorageService} from "../../services/storage.service";
import {faStar, faHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit, OnDestroy {
  public uuid: string;
  private response: Subscription;
  public error: string;
  public success: string;
  public film: Film;
  public faStar = faStar;
  public faHeart = faHeart;

  constructor(private route: ActivatedRoute, private api: ApiService, private storage: StorageService) {
  }

  ngOnInit() {
    this.response = this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
    });
    this.response = this.api.model(this.uuid).subscribe((data) => {
      if (!data) {
        this.error = 'Film not found';
      } else {
        this.error = '';
        this.film = data;
        if (typeof this.film.Year == 'string')
          this.film.Year = parseInt(this.film.Year);
        if (this.storage.localstorage.hasOwnProperty(this.film.imdbID)) {
          this.film.saved = true;
        } else {
          this.film.saved = false;
        }
      }
    });
  }

  save(event) {
    event.preventDefault();
    this.storage.localstorage[this.uuid] = this.film;
    this.storage.save();
    this.film.saved = true;
    this.success = 'Saved!'
  }

  delete(event) {
    event.preventDefault();
    if (confirm("Are you sure to delete this item")) {
      delete (this.storage.localstorage[this.uuid]);
      this.storage.save();
      this.film.saved = false;
      this.success = '';
    }
  }

  ngOnDestroy() {
    this.response.unsubscribe();
  }
}
