import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import SingleDay from 'src/Models/SingleDay';
import SingleWeekReviews from 'src/Models/SingleWeekReview';

@Component({
  selector: 'app-trainee-full-training',
  templateUrl: './trainee-full-training.component.html',
  styleUrls: ['./trainee-full-training.component.css']
})
export class TraineeFullTrainingComponent implements OnInit {

  techs:string[]=['angular','react'];
  trainingDetails:any;
  trainingId:number;
  trainingDays:SingleDay[]=[];
  startDate:Date;
  weekNo:number;
  weekReview:string;
  mentorName:string;
  traineeName:string;
  weekelyReviews:SingleWeekReviews[]=[];
  mytechs:string[]=[];
  constructor(private actrouter:ActivatedRoute,private service:SharedService) { }

  ngOnInit(): void {
    this.trainingId=this.actrouter.snapshot.params.id;
    console.log("yyyy",this.trainingId);
    this.service.getCompleteTrainingDetails(this.trainingId).subscribe(data=>{
      this.trainingDetails=data;
      this.trainingId=this.trainingDetails.trainingId;
      this.trainingDays=this.trainingDetails.trainingDays;
      this.startDate=this.trainingDetails.startDate;
      this.mentorName=this.trainingDetails.mentorName;
      this.traineeName=this.trainingDetails.traineeName;
      this.mytechs=this.trainingDetails.technames;
      this.weekelyReviews=this.trainingDetails.weeks;
      console.log(data);
      console.log("my training days",this.trainingDays);
    })
  }

  OnWeekelyReviewSubmit(){
    var swr=new SingleWeekReviews();
    swr.WeekNumber=this.weekNo;
    swr.CurrentWeekReview=this.weekReview;
    swr.TrainingId=this.trainingId;    
    this.weekelyReviews.push(swr);
    this.service.addWeekReview(swr).subscribe(res=>{
      alert("post attempted "+res.toString());
    });
  }

}
