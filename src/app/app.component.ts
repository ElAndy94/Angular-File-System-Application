import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
// import { Student } from './student';
// import { Person } from './person';
// import { Teacher } from './teacher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC9ik2u7HisiJ8FFUvW3HalCtRkMQQj6cQ',
      authDomain: 'ng-file-system.firebaseapp.com'
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  // title = 'app';
  // // private size: number;
  // // andy = new Person('Andy', 'Peliza');
  //
  // josh = new Person('josh', 'hazel');
  // andrew = new Student( 'Andrew', 'Peliza', 15092060, 'Computing');
  //
  // angi = new Teacher( 'Andrew', 'Peliza', 15092060, ['Computing', 'Software Dev']);
}


