import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputComponent } from './input/input.component';
import { PasswordComponent } from './password/password.component';
import { EmailComponent } from './email/email.component';
import { PhoneComponent } from './phone/phone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderModule } from './header/header/header.module';
import { FooterModule } from './footer/footer/footer.module';
import { ShareService } from './share.service'
import { CountService } from './service/count.service'
import { LayoutModule } from './layout/layout.module'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    InputComponent,
    PasswordComponent,
    EmailComponent,
    PhoneComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    HeaderModule,
    FooterModule,
    LayoutModule
  ],
  providers: [
    ShareService,
    CountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// ShareModule: chua service de module khac xai. 