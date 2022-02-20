import { NgModule } from '@angular/core';
import { ButtonComponentComponent } from './stories/components/button-component/button-component.component';
import { InputComponent } from './stories/components/input/input.component';
import { CustomCompComponent } from './stories/components/custom-comp/custom-comp.component';
import { NavbarComponent } from './stories/components/navbar/navbar.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent
  ],
  exports: [
    ButtonComponentComponent,
    InputComponent,
    CustomCompComponent,
    NavbarComponent,
    MatButtonToggleModule
  ],
  imports: [
    MatSliderModule,
    MatButtonToggleModule
  ],
  
  
})
export class UiComponentsModule {
    constructor(){
      console.log({
        MatSliderModule
      });
      }


 }
