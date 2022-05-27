import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {

  constructor(private service:VisionService) { }
  cards:any;
  ngOnInit(): void {
    this.cards=this.service.cards;
  }

}
