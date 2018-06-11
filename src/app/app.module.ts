import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {CoursesSelectionComponent} from './courses-selection/courses-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    MycourseComponent,
    CoursesSelectionComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

