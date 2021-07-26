import { Component, Input, OnInit } from '@angular/core';
import SingleDay from 'src/Models/SingleDay';

@Component({
  selector: 'app-training-days',
  templateUrl: './training-days.component.html',
  styleUrls: ['./training-days.component.css']
})
export class TrainingDaysComponent implements OnInit {
  @Input() day:SingleDay;
  // topic:string;
  // topicdesc:string;
  // topicres:string;
  // expectedDate:Date;
  // actualDate:Date;
  // studentres:string
  // progress:string
  constructor() { }

  ngOnInit(): void {
    console.log("message from training days ",this.day);
  }

  onSubmit(){

  }

}
