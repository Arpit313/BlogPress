import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
{
  path:"",
  component:HomeComponent
},
{
  path:"create",
  component:CreateComponent
},
{
  path:"manage",
  component:ManageComponent
},
{
  path:"view/:id",
  component:ViewComponent
},
{
  path:"edit/:id",
  component:EditComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
