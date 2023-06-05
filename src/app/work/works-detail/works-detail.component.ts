import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { works } from 'src/app/works';

@Component({
  selector: 'app-works-detail',
  templateUrl: './works-detail.component.html',
  styleUrls: ['./works-detail.component.scss']
})
export class WorksDetailComponent implements OnInit {
  work:any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.work = works[+params.get("workId")!]
    })
  }
}
