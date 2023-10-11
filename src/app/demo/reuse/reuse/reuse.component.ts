import { Component } from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.scss']
})
export class ReuseComponent {
  items: number[] = [];

  add() {
    this.items.push(0);
  }
  remove() {
    this.items.shift();
  }
}
