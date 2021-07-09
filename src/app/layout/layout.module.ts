import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderModule } from '../header/header/header.module';
import { FooterModule } from '../footer/footer/footer.module'


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
