import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses-selection',
  templateUrl: './courses-selection.component.html',
  styleUrls: ['./courses-selection.component.css']
})
export class CoursesSelectionComponent implements OnInit {
  // public example = 'Test';
  // private timer;

  aWeb = new Course(
    'Advanced Web Development',
    'Express \n' + 'Angular JS \n' + 'Backbone JS \n' + 'Node ',
    20,
    1322
  );

  // withFatArrow() {
  //   this.timer = setTimeout(() => alert(this.example), 500);
  // }

  // withoutFatArrow() {
  //   this.timer = setTimeout(function() {
  //     alert(this.example);
  //   }, 500);
  // }

  constructor() {}

  ngOnInit() {}
}

// Design develop and maintain PL/SQL programs that manipulate small-sized relational and object-relational databases. <br>
// Rationalise the alternative principles of organising, designing and building infa-structures for the processing of very large databases. <br>
// Apply advanced data analytic techniques to a variety of architectures and data models to support data science and business intelligence processes. <br>
// Identify, apply, experiment and evaluate data mining techniques and algorithms

// Demonstrate that you have the capacity to gain new skills and knowledge independently of teaching.
//           <br>
//           Analyse, compare, discuss and assess existing work, as well as your own work.
//           <br>
//           Synthesise and integrate the learning obtained from other units taken on your degree programme.
//           <br>
//           Identify, develop and critically reflect on own engagement with professional development.

// Evaluate and apply the issues, concepts and techniques of project management.
//           <br>
//           Evaluate & Apply strategic planning techniques and models of IS/IT exploitation to inform high level management decisions.
//           <br>
//           Critically assess the design, integration, management and operation of information systems in a wider organisational context.
