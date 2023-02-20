import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ManageComponent } from './manage/manage.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ManageComponent,
    NavComponent,
    BlogComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
