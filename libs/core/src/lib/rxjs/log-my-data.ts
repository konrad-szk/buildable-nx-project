import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function logMyData<T>() {
  return (src: Observable<T>) => src.pipe(tap(data => console.log('Really important data', data)));
}
