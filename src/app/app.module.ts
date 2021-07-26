import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './POC/authentication/authentication.component';
import { AdminComponent } from './POC/admin/admin.component';
import { MentorComponent } from './POC/mentor/mentor.component';
import { TraineeComponent } from './POC/trainee/trainee.component';
import { AddUserComponent } from './POC/admin/add-user/add-user.component';
import { AddTechComponent } from './POC/admin/add-tech/add-tech.component';
import { CreateTrainingComponent } from './POC/mentor/create-training/create-training.component';
import { SearchTrainingsComponent } from './POC/search-trainings/search-trainings.component';
import { MyTrainingsComponent } from './POC/my-trainings/my-trainings.component';
import { TrainingCardsTableComponent } from './POC/training-cards-table/training-cards-table.component';
import { TrainingDaysComponent } from './POC/training-days/training-days.component';
import { WeeklyReviewComponent } from './POC/weekly-review/weekly-review.component';
import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FullTrainingComponent } from './POC/full-training/full-training.component';
import { DayScheduleComponent } from './POC/day-schedule/day-schedule.component';
import { TraineeMyTrainingsComponent } from './POC/trainee/trainee-my-trainings/trainee-my-trainings.component';
import { TraineeTrainingCardsTableComponent } from './POC/trainee/trainee-training-cards-table/trainee-training-cards-table.component';
import { TraineeFullTrainingComponent } from './POC/trainee/trainee-full-training/trainee-full-training.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AdminComponent,
    MentorComponent,
    TraineeComponent,
    AddUserComponent,
    AddTechComponent,
    CreateTrainingComponent,
    SearchTrainingsComponent,
    MyTrainingsComponent,
    TrainingCardsTableComponent,
    TrainingDaysComponent,
    WeeklyReviewComponent,
    FullTrainingComponent,
    DayScheduleComponent,
    TraineeMyTrainingsComponent,
    TraineeTrainingCardsTableComponent,
    TraineeFullTrainingComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      ReactiveFormsModule,
      NgMultiSelectDropDownModule.forRoot(),
      HttpClientModule

  ],  
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
