import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsFormsComponent } from './results-forms.component';

describe('ResultsFormsComponent', () => {
  let component: ResultsFormsComponent;
  let fixture: ComponentFixture<ResultsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
