import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit() {
  }

}
