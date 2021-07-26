import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeFullTrainingComponent } from './trainee-full-training.component';

describe('TraineeFullTrainingComponent', () => {
  let component: TraineeFullTrainingComponent;
  let fixture: ComponentFixture<TraineeFullTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeFullTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeFullTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
