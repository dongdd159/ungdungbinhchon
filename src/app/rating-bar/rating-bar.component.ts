import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RatingBar} from "../rating-bar";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit, OnChanges {
  @Input()
  max=10;
  @Input()
  current=4;


  ratingList: Array<RatingBar> = []

  constructor() {
    this.loadRating();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadRating();
  }

  loadRating(){
    this.ratingList = Array.from({length: this.max}, (_, index) => ({
      value:index +1,
      active: index<this.current
    }));
  }
  confirmRating(index: number){
    this.current = index+1;
    this.ratingList.forEach((item, idx)=>item.active = idx <this.current);
  }
  ratingAction(index: number){
    this.ratingList.forEach((item, idx)=>item.active = idx <index);
  }


}
