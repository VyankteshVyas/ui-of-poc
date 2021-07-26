import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTrainingComponent } from './full-training.component';

describe('FullTrainingComponent', () => {
  let component: FullTrainingComponent;
  let fixture: ComponentFixture<FullTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
