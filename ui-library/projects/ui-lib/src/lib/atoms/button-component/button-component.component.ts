import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {
  @Input() text: string= 'Click me!';
  constructor() { }

  ngOnInit(): void {
  }

}
