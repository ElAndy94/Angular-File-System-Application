import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickAdv() {
    console.log('Adv');
  }

  onClickEng() {
    console.log('eng');
  }

  onClickProject() {
    console.log('project');
  }

  onClickIs() {
    console.log('IS');
  }

}
