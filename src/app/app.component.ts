import { Component } from '@angular/core';
import template from './app.component.html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Masterclass';

  template = template;
  constructor() {
    // console.log(template);
  }
}
