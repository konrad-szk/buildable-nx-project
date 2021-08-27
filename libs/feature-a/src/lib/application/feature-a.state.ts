import { State } from '@szk/core';
import { Injectable } from '@angular/core';

interface Posts extends Record<string, unknown>{
  id: number,
  title: string;
}
@Injectable()
export class FeatureAState extends State<Posts> {
  public constructor() {
    super();
    this.patch({id: 1, title: 'title'});
  }
}
