import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCardsTableComponent } from './training-cards-table.component';

describe('TrainingCardsTableComponent', () => {
  let component: TrainingCardsTableComponent;
  let fixture: ComponentFixture<TrainingCardsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingCardsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCardsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
