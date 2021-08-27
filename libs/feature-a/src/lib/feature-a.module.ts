import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './ui/display/display.component';
import { CoreModule } from '@szk/core';
import { CREATES_DATA } from './domain/creates-data';
import { HttpCreatesDataService } from './infrastructure/http-creates-data.service';
import { FeatureAState } from './application/feature-a.state';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [
    DisplayComponent
  ],
  providers: [
    FeatureAState,
    {
      provide: CREATES_DATA,
      useClass: HttpCreatesDataService
    }
  ],
  exports: [DisplayComponent]
})
export class FeatureAModule {
}
