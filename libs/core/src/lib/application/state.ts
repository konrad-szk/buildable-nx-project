import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class State<T extends Record<string, unknown>> {
  private readonly _state: BehaviorSubject<T | null>;
  public readonly state$;

  protected constructor() {
    this._state = new BehaviorSubject<T | null>(null);
    this.state$ = this._state.asObservable();
  }

  protected patch(value: T){
    this._state.next(value);
  }
}
