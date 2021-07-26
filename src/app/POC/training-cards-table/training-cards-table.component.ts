import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import TrainMinCard from 'src/Models/TrainMinCard';
import { Router } from '@angular/router';


@Component({
  selector: 'app-training-cards-table',
  templateUrl: './training-cards-table.component.html',
  styleUrls: ['./training-cards-table.component.css']
})
export class TrainingCardsTableComponent implements OnInit {
  @Input() userId:any;
  mentorId:number;
  trainingCardList:TrainMinCard[]=[];
  constructor(private service:SharedService,private router:Router) { }

  ngOnInit(): void {
    
    this.mentorId=this.userId;
    console.log("mymeno",this.userId);
    this.getMentorAllTrainings();
  }

  getMentorAllTrainings(){
    this.service.getMentorAllTrainings(this.mentorId).subscribe(data=>{
      this.trainingCardList=data;
      console.log("training list data",this.trainingCardList);
      console.log(data);
    })
  }

  cardClick(cardIndex:number){
    console.log(cardIndex+" training card id is ",this.trainingCardList[cardIndex].trainingId);
    this.router.navigate(['Mentor',this.mentorId,'fulltraining',this.trainingCardList[cardIndex].trainingId]);
  }

}
