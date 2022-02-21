import { Component } from '@angular/core';
import {getStateObservable} from '@ess:single-spa:mf-store'
@Component({
  selector: 'mf-reciever',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mf-receiver';
  buttonText = 'Click me!';
  ngOnInit() {
    getStateObservable().subscribe((value:any)=>console.log(`
    ${JSON.stringify(value)}
    `)) 
  }
  onButtonClick = (e:Event)=>{
      this.buttonText = 'clicked';
      console.log('clicked',e)
  }
}
