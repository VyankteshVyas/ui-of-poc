import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SharedService } from 'src/app/shared.service';
import mentor from 'src/Models/mentor';
import SingleDay from 'src/Models/SingleDay';
import Training from 'src/Models/Training';




@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {
  
  //list imported from api's
  mentorlist:any=[];
  traineelist:any=[];
  techlist:any[]=[];

  //The object to send through post
  currTraining:Training=new Training();

  //day variables
  topic:string;
  topicdesc:string;
  topicres:string;
  expectedDate:Date;
  actualDate:Date;
  studentres:string
  progress:string
  
  //drop down setting variables decalaration
  mentordropdownSettings:IDropdownSettings={};
  traineedropdownSettings:IDropdownSettings={};
  techdropdownSettings:IDropdownSettings={};
  
  
  //basic details
  trainingReview:string;
  startDate:Date;
  mentorId:number;
  traineeId:number;
  selectedTechs:number[]=[];

  constructor(private router:Router,private formBuilder: FormBuilder,private sharedService:SharedService) { }

  days:SingleDay[]=[];
  ngOnInit(): void {
    this.sharedService.getMentorList().subscribe(mentors=>{
      this.mentorlist=mentors;
      console.log(this.mentorlist);
    })
    this.sharedService.getTechList().subscribe(techlist=>{
      this.techlist=techlist;
      console.log(this.techlist);
    })
    this.sharedService.getTrainee().subscribe(trainees=>{
      console.log("oyefejif");
      this.traineelist=trainees;
      console.log("hello trainees",this.traineelist);
    })
    
    //Drop Down Settings
    this.mentordropdownSettings= {
      allowSearchFilter:true,
      singleSelection: false,
      idField: 'mentorId',
      textField: 'mentorName',
      limitSelection:1
      
    };
    this.traineedropdownSettings= {
      allowSearchFilter:true,
      singleSelection: false,
      idField: 'traineeId',
      textField: 'traineeName',
      limitSelection:1
      
    };
    this.techdropdownSettings= {
      allowSearchFilter:true,
      singleSelection: false,
      idField: 'techId',
      textField: 'techName',
      limitSelection:10
      
    };
  }

  

  onSubmit() {
    // Process checkout data here
    this.currTraining.MentorId=this.mentorId;
    this.currTraining.TraineeId=this.traineeId;
    this.currTraining.Tech=this.selectedTechs;
    this.currTraining.StartDate=this.startDate;
    this.currTraining.TrainingReview=this.trainingReview;
    this.currTraining.TrainingDays=this.days;
    console.log("cur train is ",this.currTraining);
    this.sharedService.addTraining(this.currTraining).subscribe(res=>{
      alert("post attempted "+res.toString());
    });
    this.router.navigate(['mentor','myTraining']);
    console.log("post attempted");
  }

  onAddDay(){
    var sd=new SingleDay();
    sd.Topic=this.topic;
    sd.TopicDesc=this.topicdesc;
    sd.Resources=this.topicres;
    sd.ActualDate=this.actualDate;
    sd.ExpectedDate=this.expectedDate;
    sd.Progress=this.progress;
    sd.StudentResources=this.studentres;    
    console.log(sd);
    this.days.push(sd);
    
  }

  ontechselect(item: any) {
    
    this.selectedTechs.push(item.techId);
    console.log("vanki tech list",this.selectedTechs);
  }
  
  ontechdeselect(item: any){
    const index = this.selectedTechs.indexOf(item.techId,0);
    if(index>-1){
      this.techlist.splice(index,1);
    }
    console.log(this.techlist);
  }

  onmentorSelect(item:any){
    this.mentorId=item.mentorId;
    console.log("sel men ",this.mentorId);
    console.log("temp : ",item);
  }

  onmentordeselect(item:any){
    this.mentorId=-1;
    console.log("temp : ",item);
  }

  ontraineeselect(item: any) {
    this.traineeId=item.traineeId;
    console.log("temp : ",item);
  }

  ontraineedeselect(item:any){
    this.traineeId=-1;
    console.log("temp : ",item);
  }

  
  
}
