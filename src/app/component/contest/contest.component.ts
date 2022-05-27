import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  constructor(private service:VisionService) { }
  contest:any;
  ngOnInit(): void {
    this.contest=this.service.Contest;
  }

}
