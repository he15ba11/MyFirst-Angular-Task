import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(public dataService: DataService) {}
  invalidName = false;
  invalidEmail = false;
  invalidMobile = false;
  // password: string = '';
  namePattern = /[a-zA-Z]{3,}/;
  emailPattern = /^[a-zA-Z0-9]{3,}@gmail.com/;
  mobilePattern = /^01[0-2]\d{8}$/;
  // pwdPattern = /[a-zA-Z0-9]{8,}/;
  ntext = '';
  etext = '';
  mtext = '';
  // ptext = '';

  validateName(): void {
    this.ntext = 'Invaild Name';
    this.invalidName = !this.namePattern.test(this.dataService.formName);
  }
  validateEmail(): void {
    this.etext = 'Invaild Email';
    this.invalidEmail = !this.emailPattern.test(this.dataService.formEmail);
  }

  validateMobile(): void {
    this.mtext = 'Invaild Mobile';
    this.invalidMobile = !this.mobilePattern.test(this.dataService.formMobile);
  }
  // validatePwd(): void {
  //   this.ptext = 'Invaild Password';
  //   this.invalidPwd = !this.pwdPattern.test(this.password);
  // }
  addRow() {
    if (
      this.dataService.formName !== '' &&
      this.dataService.formEmail !== '' &&
      this.dataService.formMobile !== '' &&
      // this.password !== '' &&
      // !this.invalidPwd &&
      !this.invalidEmail &&
      !this.invalidName &&
      !this.invalidMobile
    ) {
      this.dataService.userData = [
        this.dataService.formName,
        this.dataService.formEmail,
        this.dataService.formMobile,
      ];
      this.dataService.showTable = true;
      this.dataService.usersData[this.dataService.i] =
        this.dataService.userData;
      this.dataService.formName =
        this.dataService.formEmail =
        this.dataService.formMobile =
          // this.password =
          '';
      this.dataService.i = this.dataService.usersData.length;
    } else {
      if (this.dataService.formName == '') {
        this.invalidName = true;
        this.ntext = 'required Field';
      }
      if (this.dataService.formEmail == '') {
        this.invalidEmail = true;
        this.etext = 'required Field';
      }
      if (this.dataService.formMobile == '') {
        this.invalidMobile = true;
        this.mtext = 'required Field';
      }
      // if (this.password == '') {
      //   this.invalidPwd = true;
      //   this.ptext = 'required Field';
      // }
    }
    this.dataService.path = false;
  }
}
