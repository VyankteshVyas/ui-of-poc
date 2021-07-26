import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeMyTrainingsComponent } from './trainee-my-trainings.component';

describe('TraineeMyTrainingsComponent', () => {
  let component: TraineeMyTrainingsComponent;
  let fixture: ComponentFixture<TraineeMyTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeMyTrainingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeMyTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
