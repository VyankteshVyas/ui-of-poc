import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import SingleWeekReviews from 'src/Models/SingleWeekReview';
import SingleDay from 'src/Models/SingleDay';

@Component({
  selector: 'app-full-training',
  templateUrl: './full-training.component.html',
  styleUrls: ['./full-training.component.css']
})
export class FullTrainingComponent implements OnInit {

  techs:string[]=['angular','react'];
  trainingDetails:any;
  trainingId:number;
  trainingDays:SingleDay[]=[];
  weekNo:number;
  weekReview:string;
  weekelyReviews:SingleWeekReviews[]=[];
  constructor(private actrouter:ActivatedRoute,private service:SharedService) { }

  ngOnInit(): void {
    this.trainingId=this.actrouter.snapshot.params.id;
    console.log("yyyy",this.trainingId);
    this.service.getCompleteTrainingDetails(this.trainingId).subscribe(data=>{
      this.trainingDetails=data;
      this.trainingDays=this.trainingDetails.trainingDays;
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
