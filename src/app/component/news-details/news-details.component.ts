import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private service:VisionService) { }
  cards:any;
  ngOnInit(): void {
    this.cards=this.service.cards;
  }

}
