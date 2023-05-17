import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-info',
  templateUrl: './expert-info.component.html',
  styleUrls: ['./expert-info.component.css'],
})
export class ExpertInfoComponent implements OnInit {
  stateOptions: any[] = [
    { label: 'Hoàn thành', value: 'complete' },
    { label: 'Tiến hành', value: 'progress' },
  ];

  projectStt: any;

  projectList: any = [
    {
      id: 1,
      projectNm: 'Olivia Rhye',
      startDt: new Date().getMonth() - 2,
      endDt: new Date(),
      status: 'Hoàn thành',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.projectStt = 'complete';
  }
}
