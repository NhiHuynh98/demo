import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home.component'
import { CoreComponent } from '../core/core.component'

const routes: Routes = [
  {
    path: '',
    component: CoreComponent ,
    children: [
      { path: '', pathMatch: 'full', component: HomeComponent },
      {
        path: 'profile', loadChildren: () => import('../profile/info/info.module').then(m => m.InfoModule)
      },
      {
        path: 'count', loadChildren: () => import('../count/count/count.module').then(m => m.CountModule)
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
