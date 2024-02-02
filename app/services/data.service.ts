import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public showTable = false;
  public usersData: any = [];
  public userData: any = [];
  public i: number = 0;
  public formName: string = '';
  public formEmail: string = '';
  public formMobile: string = '';
  public path = false;
}
