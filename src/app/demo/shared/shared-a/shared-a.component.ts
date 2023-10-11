import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared-a',
  templateUrl: './shared-a.component.html',
  styleUrls: ['./shared-a.component.scss']
})
export class SharedAComponent {
  constructor(private sharedService: SharedService) {

  }
}
