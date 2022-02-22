import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mf-nav',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router
  ) {}

  actions = [
    {
      text: 'Home',
      color: 'primary',
      onclick: () => this.router.navigate(['/'])
    },
    {
      text: 'Emitter',
      color: 'warn',
      onclick: () => this.router.navigate(['/emitter'])
    },
    {
      text: 'Receiver',
      color: 'primary',
      onclick: () => this.router.navigate(['/receiver'])
    }
  ] 
}
