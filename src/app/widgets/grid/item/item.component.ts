import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Film} from "../../../interfaces/film";
import {StorageService} from "../../../services/storage.service";
import {ApiService} from "../../../services/api.service";
import {Subscription} from "rxjs";
import {Filmsearch} from "../../../interfaces/filmsearch";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Filmsearch;
  @Input() callback= () => {};
  @Input() url: string;
  private response: Subscription;
  public success: string;
  public error: string;
  public faHeart = faHeart;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private storage: StorageService) {

  }

  ngOnInit() {
    if (typeof this.item.Year == 'string')
      this.item.Year = parseInt(this.item.Year);
    if (this.storage.localstorage.hasOwnProperty(this.item.imdbID)) {
      this.item.saved = true;
    } else {
      this.item.saved = false;
    }
  }

  save(event) {
    event.preventDefault();
    this.response = this.api.model(this.item.imdbID).subscribe((data) => {
      if (!data) {
        this.error = 'Film not found';
      } else {
        this.error = '';
        this.storage.localstorage[this.item.imdbID] = data;
        this.storage.save();
        this.item.saved = true;
        this.response.unsubscribe();
        this.success = 'Saved!';
      }
    });
  }

  delete(event) {
    event.preventDefault();
    if(confirm("Are you sure to delete this item")) {
      console.log("Implement delete functionality here");
      delete (this.storage.localstorage[this.item.imdbID]);
      this.storage.save();
      this.item.saved = false;
      if (this.callback) {
        this.callback()
      }
    }

  }

  ngOnDestroy() {
    if (this.response)
      this.response.unsubscribe();
  }
}
