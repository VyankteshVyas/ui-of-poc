import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import TrainMinCard from 'src/Models/TrainMinCard';

@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.css']
})
export class MyTrainingsComponent implements OnInit {
  userId:any;
  constructor(private actrouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.actrouter.snapshot.params.myuserId;
    console.log("from mytrain",this.userId);
  }

}
