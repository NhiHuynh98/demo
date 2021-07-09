import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CountComponent } from './count/count.component';
import { LayoutModule } from '../layout/layout.module';
import { CoreComponent } from './core/core.component'

@NgModule({
  declarations: [
    ProfileComponent,
    CountComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ]
})
export class HomeModule { }
