import { Component, OnInit,Input } from '@angular/core';
import SingleWeekReviews from 'src/Models/SingleWeekReview';

@Component({
  selector: 'app-weekly-review',
  templateUrl: './weekly-review.component.html',
  styleUrls: ['./weekly-review.component.css']
})
export class WeeklyReviewComponent implements OnInit {
  @Input() weekreview:SingleWeekReviews;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
