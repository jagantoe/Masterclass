import { Component } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  trigger() {
    var input: HTMLInputElement = document.getElementById('input') as HTMLInputElement;

    document.getElementById('text')!.innerText = input.value;
  }
}
