import { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';


export const CREATES_DATA = new InjectionToken<CreatesData>('CREATES_DATA');
export interface CreatesData {
  create(): Observable<any>
}
