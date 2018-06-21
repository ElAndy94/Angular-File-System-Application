import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesSelectionComponent } from './courses-selection/courses-selection.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostsService } from './posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    MycourseComponent,
    CoursesSelectionComponent,
    AboutusComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

