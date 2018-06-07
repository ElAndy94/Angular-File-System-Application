import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {MycourseComponent} from './mycourse/mycourse.component';
import {CoursesComponent} from './courses/courses.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mycourse', component: MycourseComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: HomeComponent } /*I need to fix this*/
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}