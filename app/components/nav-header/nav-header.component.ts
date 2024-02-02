import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  constructor(public dataService: DataService) {}
  allowPath() {
    this.dataService.path = true;
  }
  notAllowPath() {
    this.dataService.path = false;
  }
}
