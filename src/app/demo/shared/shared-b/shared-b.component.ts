import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shared-b',
  templateUrl: './shared-b.component.html',
  styleUrls: ['./shared-b.component.scss']
})
export class SharedBComponent {
  constructor(private sharedService: SharedService) {

  }
}
