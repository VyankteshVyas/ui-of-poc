import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDaysComponent } from './training-days.component';

describe('TrainingDaysComponent', () => {
  let component: TrainingDaysComponent;
  let fixture: ComponentFixture<TrainingDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
