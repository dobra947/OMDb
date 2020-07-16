import {Component, OnDestroy, OnInit} from '@angular/core';
import {Filmsearch} from "../../interfaces/filmsearch";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../services/api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-filmsearch',
  templateUrl: './filmsearch.component.html',
  styleUrls: ['./filmsearch.component.scss']
})
export class FilmsearchComponent implements OnInit, OnDestroy {

  public currentPage = 1;
  public searchValue: string;
  public pages = [];
  public totalPages = 0;
  public faSearch = faSearch;
  public totalResults = 54;
  private response: Subscription;
  public error: string;
  public filmlist: Filmsearch[] = [];

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

  }

  search(event) {
    this.searchValue = (event.target as HTMLInputElement).value;
    this.response = this.api.search(this.searchValue, this.currentPage).subscribe((data) => {
      if (data.Response == 'False') {
        this.error = data.Error;
      } else {
        this.error = '';
        this.filmlist = data.Search;
        this.totalResults = data.totalResults;
        this.currentPage = 1;
        this.pagination();
      }
    });
  }

  goPage(page) {
    this.currentPage = page;
    this.response = this.api.search(this.searchValue, this.currentPage).subscribe((data) => {
      if (data.Response == 'False') {
        this.error = data.Error;
      } else {
        this.error = '';
        this.filmlist = data.Search;
        this.totalResults = data.totalResults;
        this.pagination();
      }
    });
  }

  pagination(): void {
    this.totalResults
    this.totalPages = this.totalResults / 10;
    console.log(this.totalResults)
    console.log(this.totalPages)
    switch (true) {
      case this.currentPage == 1:
        if (this.totalPages > this.currentPage + 1) {
          this.pages = [this.currentPage, this.currentPage + 1, this.currentPage + 2];
        } else if (this.totalPages > this.currentPage) {
          this.pages = [this.currentPage, this.currentPage + 1];
        } else {
          this.pages = [this.currentPage - 1, this.currentPage];
        }
        break;
      case this.currentPage == 2:
        if (this.totalPages > this.currentPage + 1) {
          this.pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
        } else if (this.totalPages > this.currentPage) {
          this.pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
        } else {
          this.pages = [this.currentPage - 1, this.currentPage - 1, this.currentPage];
        }
        break;
      default:
        if (this.totalPages > this.currentPage + 1) {
          this.pages = [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
        } else if (this.totalPages > this.currentPage) {
          this.pages = [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1];
        } else {
          this.pages = [this.currentPage - 2, this.currentPage - 1, this.currentPage];
        }
        break;
    }
  }

  ngOnDestroy(): void {
    this.response.unsubscribe();
  }
}
