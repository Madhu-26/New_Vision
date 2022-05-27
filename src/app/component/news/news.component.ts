import { Component, OnInit } from '@angular/core';
import { VisionService } from 'src/app/service/vision.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service:VisionService) { }
  cards:any;
  ngOnInit(): void {
    this.cards=this.service.cards;
  }

}
