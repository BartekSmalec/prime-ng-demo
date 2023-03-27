import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'prime-ng-demo';
  items: MenuItem[];
  sidebarVisible: boolean;
  value: string;
  selectedCities: string[];
  passwordStrength = 0;
  checked_one: boolean = false;
  checked_two: boolean = false;
  passwordStrengthText = '';


  constructor() {
    this.items = [];
    this.sidebarVisible = false;
    this.value = "";
    this.selectedCities = [];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io',
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload',
      },
    ];
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  checkPasswordStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    let strength = 0;
    const regex = [
      /[a-z]/,
      /[A-Z]/,
      /[0-9]/,
      /[^A-Za-z0-9]/
    ];

    regex.forEach((pattern) => {
      if (pattern.test(password)) {
        strength++;
      }
    });

    this.passwordStrength = (strength / regex.length) * 100;

    if (this.passwordStrength >= 76) {
      this.passwordStrengthText = 'Very strong';
    } else if (this.passwordStrength >= 51) {
      this.passwordStrengthText = 'Strong';
    } else if (this.passwordStrength >= 31) {
      this.passwordStrengthText = 'Medium';
    } else {
      this.passwordStrengthText = 'Very weak';
    }
  }
}
