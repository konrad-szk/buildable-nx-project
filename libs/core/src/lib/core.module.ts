import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GETS_DATA } from './domain/gets-data';
import { HttpGetsDataService } from './infrastructure/http-gets-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: GETS_DATA,
      useClass: HttpGetsDataService
    }
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [HeaderComponent]
})
export class CoreModule {}
