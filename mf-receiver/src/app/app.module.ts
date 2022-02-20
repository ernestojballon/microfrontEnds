import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ButtonToExportComponent } from '@serve:single-spa:mf-emitter';
import { UiComponentsModule } from 'component-lib';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 

  constructor() {
    console.log({
      UiComponentsModule
    });
  }
}
