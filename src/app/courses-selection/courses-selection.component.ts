import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses-selection',
  templateUrl: './courses-selection.component.html',
  styleUrls: ['./courses-selection.component.css']
})
export class CoursesSelectionComponent implements OnInit {
  public example = 'Test';
  private timer;

  aWeb = new Course('Advanced Web Development', 'Express \n' +
    'Angular JS \n' +
    'Backbone JS \n' +
    'Node ', 20, 1322);

//   test = new Test();
// //test.withFatArrow();
//   test.withoutFatArrow();

  withFatArrow() {
    this.timer = setTimeout(() => alert(this.example), 500);
  }

  withoutFatArrow() {
    this.timer = setTimeout(function() { alert(this.example); }, 500);
  }


  constructor() { }


  ngOnInit() {
  }

}
