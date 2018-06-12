import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
// import { SigninComponent } from './auth/signin/signin.component';
// import { SignupComponent } from './auth/signup/signup.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {MycourseComponent} from './mycourse/mycourse.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {CoursesSelectionComponent} from './courses-selection/courses-selection.component';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    // SigninComponent,
    // SignupComponent,
    NavbarComponent,
    HomeComponent,
    MycourseComponent,
    CoursesSelectionComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

