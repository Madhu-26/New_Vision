import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';

@Component({
  selector: 'app-my-task-view-all',
  templateUrl: './my-task-view-all.component.html',
  styleUrls: ['./my-task-view-all.component.css']
})
export class MyTaskViewAllComponent implements OnInit {

  constructor(private service:VisionService) { }
  cards:any;
  ngOnInit(): void {
    this.cards=this.service.cards;
  }

}
