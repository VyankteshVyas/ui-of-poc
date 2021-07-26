import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainee-my-trainings',
  templateUrl: './trainee-my-trainings.component.html',
  styleUrls: ['./trainee-my-trainings.component.css']
})
export class TraineeMyTrainingsComponent implements OnInit {
  userId:any;
  constructor(private actrouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.actrouter.snapshot.params.myuserId;
    console.log("from mytrain",this.userId);
  }

}
