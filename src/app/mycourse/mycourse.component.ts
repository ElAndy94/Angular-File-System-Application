import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycourse',
  templateUrl: './mycourse.component.html',
  styleUrls: ['./mycourse.component.css']
})
export class MycourseComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onClickAdv() {
    // window.location.href = 'courses-selection';
    // window.open('http://localhost:4200/courses-selection');
    this.router.navigate(['/courses-selection']);
    console.log('Adv');
  }

  onClickEng() {
    this.router.navigate(['/courses-selection']);
    console.log('eng');
  }

  onClickProject() {
    this.router.navigate(['/courses-selection']);
    console.log('project');
  }

  onClickIs() {
    this.router.navigate(['/courses-selection']);
    console.log('IS');
  }

}
