import { Component, OnInit ,Input} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import SingleDay from 'src/Models/SingleDay';

@Component({
  selector: 'app-day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {
  @Input() day:any;
  topicTitle:string;
  topicDesc:string;
  actualDate:Date;
  expectedDate:Date;
  progress:string;
  resources:string;
  sturesources:string;
  updatedday:SingleDay=new SingleDay();
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    console.log("oui",this.day)
    console.log("puiejf",this.day.topic);
    // console.log("from days c",this.day.TopicDesc);
    // console.log("curr dayi",this.day,"woij",this.day.DayId);
    // console.log("after days c",this.day.TopicDesc);
    // this.progress="eifjeidfe";
    // console.log("oye");
    this.actualDate=this.day.actualDate;
    this.expectedDate=this.day.expectedDate;
    this.progress=this.day.progress;
    this.resources=this.day.resources;
    this.sturesources=this.day.studentResources;
    this.topicTitle=this.day.topic;
    this.topicDesc=this.day.topicDesc;
    
  }

  OnUpdate(){
    
    this.updatedday=this.day;
    this.updatedday.StudentResources=this.sturesources;
    this.updatedday.ActualDate=this.actualDate;
    this.updatedday.Progress=this.progress;
    console.log("bruhh",this.updatedday);
    // this.service.updateDay(updatedday).subscribe(res=>{
    //   alert("post attempted ");
    // });
    console.log(this.sturesources);
  }

  getDayData(){
    // this.service.getCompleteTrainingDetails(this.trainingId).subscribe(data=>{
      
    // })
  }

  
  

}
