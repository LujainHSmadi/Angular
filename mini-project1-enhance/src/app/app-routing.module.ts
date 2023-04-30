import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FieldsComponent } from './fields/fields.component';
import { Routes,RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes =[
  //every rout is an object
{path:'create', component:FieldsComponent},
{path:'list', component:ListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
     RouterModule.forRoot(routes) ,

  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
