import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  users: any;
  show: any;
  constructor(public dataService: DataService) {}
  sentDataToForm(event: any, i: number) {
    this.dataService.formName =
      event.target.parentNode.parentNode.children[0].innerText;
    this.dataService.formEmail =
      event.target.parentNode.parentNode.children[1].innerText;
    this.dataService.formMobile =
      event.target.parentNode.parentNode.children[2].innerText;
    this.dataService.i = i;
    this.dataService.path = false;
  }
  deleteField(event: any, i: number) {
    event.target.parentNode.parentNode.remove();
    this.dataService.usersData.splice(i, 1);
    this.dataService.i = i - 1;
  }
}
