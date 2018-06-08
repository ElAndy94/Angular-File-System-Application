import {Component} from '@angular/core';
import { Student } from './student';
import {Person} from './person';
import {Police} from './police';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // private size: number;
  // andy = new Person('Andy', 'Peliza');

  josh = new Person('josh', 'hazel');

  bizzy = new Police('Big', 'Man', 3340);

  andrew = new Student( 'Andrew', 'Peliza', 15092060);
}


