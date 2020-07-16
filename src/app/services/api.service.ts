import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASEURL = 'http://www.omdbapi.com/?';
  KEY = 'f12ba140';

  constructor(private httpClient: HttpClient) {

  }
  search(search: string, page: number): Observable<any> {
    let params = this.baseParams();
    params['s'] = search;
    params['page'] = page;
    return this.get(params);
  }

  model(id: string): Observable<any> {
    let params = this.baseParams();
    params['i'] = id;
    return this.get(params);
  }

  /**
   *
   */
  baseParams(): Object {
    return {
      apikey: this.KEY,
    };
  }

  /**
   * @param data
   */
  getOptions(data?: any) {
    return {
      params: data
    };
  }

  /**
   * @param data
   */
  get(data): Observable<any> {
    const url = this.BASEURL;
    const opts = this.getOptions(data);
    // @ts-ignore
    return this.httpClient.get(url, opts);
  }
}
