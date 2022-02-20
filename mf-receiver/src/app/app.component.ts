import { Component } from '@angular/core';
import {getStateObservable} from '@serve:single-spa:mf-store'
import { variable } from '@serve:single-spa:mf-emitter';
import { UiComponentsModule } from '@serve:single-spa:mf-emitter';
@Component({
  selector: 'mf-reciever',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mf-receiver';
  ngOnInit() {
   
    getStateObservable().subscribe((value:any)=>console.log(`
    
    
    ${JSON.stringify(value)}
    
    
    `))
    
  }
}
