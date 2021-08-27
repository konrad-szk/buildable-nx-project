import { CreatesData } from '../domain/creates-data';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { logMyData } from '@szk/core';

@Injectable()
export class HttpCreatesDataService implements CreatesData {

  public constructor(private _http: HttpClient) {
  }
  create(): Observable<any> {
    return this._http.post('https://jsonplaceholder.typicode.com/posts', { title: 'title'}).pipe(logMyData());
  }

}
