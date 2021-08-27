import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureAModule } from '@szk/featureA';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FeatureAModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
