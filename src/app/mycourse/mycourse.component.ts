import {Component, OnInit} from '@angular/core';
import {Course} from '../courses-selection/course';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

  aWeb = new Course('Advanced Web Development', 'Express \n' +
    'Angular JS \n' +
    'Backbone JS \n' +
    'Node ', 20, 1322);

  project = new Course('Project', 'Independently plan, manage and successfully complete a project of substantial size in an area that is relevant to your degree programme.',
    22, 4633);

  iS = new Course('Information Systems', 'Apply a range of contemporary modelling techniques to capture information about socio-technical systems.',
    24, 8322);

  dataEng = new Course('Data Engineering', 'Evaluate and reflect on emerging trends and applications in the database market.',
    25, 5433);

  // <!--<p class="card-text">Evaluate and reflect on emerging trends and applications in the database market <br>-->
  // <!--Design develop and maintain PL/SQL programs that manipulate small-sized relational and object-relational databases. <br>-->
  // <!--Rationalise the alternative principles of organising, designing and building infa-structures for the processing of very large databases. <br>-->
  // <!--Apply advanced data analytic techniques to a variety of architectures and data models to support data science and business intelligence processes. <br>-->
  // <!--Identify, apply, experiment and evaluate data mining techniques and algorithms</p>-->

 //   <!--<p class="card-text">Independently plan, manage and successfully complete a project of substantial size in an area that is relevant to your degree programme.-->
 //   <!--<br>-->
 //   <!--Demonstrate that you have the capacity to gain new skills and knowledge independently of teaching.-->
 //   <!--<br>-->
 //   <!--Analyse, compare, discuss and assess existing work, as well as your own work.-->
 //   <!--<br>-->
 //   <!--Synthesise and integrate the learning obtained from other units taken on your degree programme.-->
 //   <!--<br>-->
 // <!--Identify, develop and critically reflect on own engagement with professional development.</p>-->

  // <!--<p class="card-text">Apply a range of contemporary modelling techniques to capture information about socio-technical systems.-->
  // <!--<br>-->
  // <!--Evaluate and apply the issues, concepts and techniques of project management.-->
  // <!--<br>-->
  // <!--Evaluate & Apply strategic planning techniques and models of IS/IT exploitation to inform high level management decisions.-->
  // <!--<br>-->
  // <!--Critically assess the design, integration, management and operation of information systems in a wider organisational context.</p>-->

  constructor() {
  }

  ngOnInit() {
  }

}
