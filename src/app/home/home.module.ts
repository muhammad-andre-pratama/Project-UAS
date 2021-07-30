import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { materialModule } from 'src/material/material';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:''
      },
    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    materialModule
  ]
})
export class HomeModule { }
