import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';

export const GETS_DATA = new InjectionToken<GetsData>('GETS_DATA')

export interface GetsData {
  get(): Observable<any>;
}
