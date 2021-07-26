import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeTrainingCardsTableComponent } from './trainee-training-cards-table.component';

describe('TraineeTrainingCardsTableComponent', () => {
  let component: TraineeTrainingCardsTableComponent;
  let fixture: ComponentFixture<TraineeTrainingCardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeTrainingCardsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeTrainingCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
