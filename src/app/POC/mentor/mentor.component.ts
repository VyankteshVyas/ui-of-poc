import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  userId:number;
  constructor(private router:Router,private actrouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.actrouter.snapshot.params.userId;
  }

  gotoComponent(url:string){
    console.log("userid from mentor value is",this.userId);
    this.router.navigate(['Mentor',this.userId,url,this.userId]);
  }

}
