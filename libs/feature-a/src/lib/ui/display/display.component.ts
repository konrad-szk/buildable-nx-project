import { Component, Inject } from '@angular/core';
import { GETS_DATA, GetsData, increase } from '@szk/core';
import { CREATES_DATA, CreatesData } from '../../domain/creates-data';
import { tap } from 'rxjs/operators';
import { FeatureAState } from '../../application/feature-a.state';

@Component({
  selector: 'buildable-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  public amount = 0 ;
  public data$ = this._data.get().pipe(
    tap((data: any[]) => this.amount = increase(data.length))
  );

  defaultValue$ = this._state.state$;

  constructor(@Inject(CREATES_DATA) private _creator: CreatesData,
              @Inject(GETS_DATA) private _data: GetsData,
              private _state: FeatureAState) {
  }

  create(){
    this._creator.create().subscribe();
  }
}
