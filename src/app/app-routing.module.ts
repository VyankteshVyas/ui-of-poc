import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTechComponent } from './POC/admin/add-tech/add-tech.component';
import { AddUserComponent } from './POC/admin/add-user/add-user.component';
import { AdminComponent } from './POC/admin/admin.component';
import { AuthenticationComponent } from './POC/authentication/authentication.component';
import { FullTrainingComponent } from './POC/full-training/full-training.component';
import { CreateTrainingComponent } from './POC/mentor/create-training/create-training.component';
import { MentorComponent } from './POC/mentor/mentor.component';
import { MyTrainingsComponent } from './POC/my-trainings/my-trainings.component';
import { SearchTrainingsComponent } from './POC/search-trainings/search-trainings.component';
import { TraineeFullTrainingComponent } from './POC/trainee/trainee-full-training/trainee-full-training.component';
import { TraineeMyTrainingsComponent } from './POC/trainee/trainee-my-trainings/trainee-my-trainings.component';
import { TraineeComponent } from './POC/trainee/trainee.component';

const routes: Routes = [
  {
    path: 'Admin/:userId', component: AdminComponent,
    children: [
      { path: 'createUser', component: AddUserComponent },
      { path: 'createTech', component: AddTechComponent }
    ]
  },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'Mentor/:userId', component: MentorComponent,
    children: [
      { path: 'createTraining/:myuserId', component: CreateTrainingComponent },
      { path: 'searchTraining/:myuserId', component: SearchTrainingsComponent },
      { path: 'myTraining/:myuserId', component: MyTrainingsComponent },
      {path:'fulltraining/:id',component:FullTrainingComponent}
    ]
  },
  { path: 'Trainee/:userId', component: TraineeComponent,
    children: [
      { path: 'searchTraining/:myuserId', component: SearchTrainingsComponent },
      { path: 'myTraining/:myuserId', component: TraineeMyTrainingsComponent },
      {path:'fulltraining/:id',component:TraineeFullTrainingComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
