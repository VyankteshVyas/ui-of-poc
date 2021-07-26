import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import TrainMinCard from 'src/Models/TrainMinCard';

@Component({
  selector: 'app-trainee-training-cards-table',
  templateUrl: './trainee-training-cards-table.component.html',
  styleUrls: ['./trainee-training-cards-table.component.css']
})
export class TraineeTrainingCardsTableComponent implements OnInit {
  @Input() userId:any;
  traineeId:number;
  trainingCardList:TrainMinCard[]=[];

  constructor(private service:SharedService,private router:Router) { }

  ngOnInit(): void {
    this.traineeId=this.userId;
    console.log("mymeno",this.userId);
    this.getTraineeAllTrainings();
  }


  getTraineeAllTrainings(){
    this.service.getTraineeAllTrainings(this.traineeId).subscribe(data=>{
      this.trainingCardList=data;
      console.log("training list data",this.trainingCardList);
      console.log(data);
    })
  }
  cardClick(cardIndex:number){
    console.log(cardIndex+" training card id is ",this.trainingCardList[cardIndex].trainingId);
    this.router.navigate(['Trainee',this.traineeId,'fulltraining',this.trainingCardList[cardIndex].trainingId]);
  }

}
