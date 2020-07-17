import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  public localstorage = {};

  private key: 'my-list';

  constructor() {
    this.localstorage = this.getData();
  }

  save() {
    localStorage.setItem(this.key, JSON.stringify(this.localstorage));
  }

  resetData() {
    this.localstorage = JSON.parse(localStorage.getItem(this.key));
  }

  getData(): Object {
    let data = JSON.parse(localStorage.getItem(this.key));
    return data ?data: {};
  }

  delete() {
    localStorage.removeItem(this.key);
  }

}
