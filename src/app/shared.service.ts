import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44352";
  constructor(private http:HttpClient) { }

  getTechList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/getTechList`)
  }
  getMentorList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/getMentorList`)
  }
  getTrainee():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/getTraineeList`)
  }
  addTraining(val:any){
    return this.http.post(this.APIUrl+'/api/createtraining',val);
  }
  getMentorAllTrainings(mentorId:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/mentortrainings/${mentorId}`);
  }
  getCompleteTrainingDetails(trainingId:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/getWholeTraining/${trainingId}`);
  }
  addWeekReview(val:any){
    return this.http.post(this.APIUrl+'/api/addWeekReview',val)
  }
  checkAuth(val:any){
    return this.http.post<any>(this.APIUrl+`/api/auth`,val);
  }
  updateDay(val:any){
    return this.http.put<any>(this.APIUrl+'/api/updateday',val);
  }
  getTraineeAllTrainings(traineeId:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+`/api/traineetrainings/${traineeId}`);
  }
}
