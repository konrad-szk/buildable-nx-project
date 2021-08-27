import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetsData } from '../domain/gets-data';
import { logMyData } from '../../rxjs/log-my-data';

@Injectable()
export class HttpGetsDataService implements GetsData{
  public constructor(
    private _http: HttpClient
  ) {
  }

  public get(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts').pipe(logMyData())
  }
}
