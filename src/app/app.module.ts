import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from "@angular/forms"
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';






@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProgressBarModule,
    ToastModule,
    CheckboxModule,
    FormsModule,
    InputSwitchModule,
    TabViewModule,
    PasswordModule,
    SliderModule,
    ButtonModule,
    CardModule,
    DividerModule,
    BrowserAnimationsModule,
    ToolbarModule,
    RippleModule,
    SplitButtonModule,
    SidebarModule,
    InputTextModule,
    AppRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
