import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';



@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.css']
})
export class MyTaskComponent implements OnInit {

  constructor(private service:VisionService) { }
  cards:any;
  ngOnInit(): void {
    this.cards=this.service.cards;
    // $('')
  }

}
