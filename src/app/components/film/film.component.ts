import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ApiService} from "../../services/api.service";
import {Film} from "../../interfaces/film";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  public uuid: string;
  private response: Subscription;
  public error: string;
  public film: Film;
  constructor(private route: ActivatedRoute, private api: ApiService) {
  }

  ngOnInit() {
    this.response = this.route.params.subscribe(params => {
      this.uuid = params['uuid'];
      console.log(this.uuid);
    });
    this.response = this.api.model(this.uuid).subscribe((data) => {
      if (!data) {
        this.error = 'Film not found';
      } else {
        this.error = '';
        this.film = data;
        console.log(this.film);
      }
    });
  }

  ngOnDestroy() {
    this.response.unsubscribe();
  }
}
