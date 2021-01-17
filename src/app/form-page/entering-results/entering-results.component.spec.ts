import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringResultsComponent } from './entering-results.component';

describe('EnteringResultsPageComponent', () => {
  let component: EnteringResultsComponent;
  let fixture: ComponentFixture<EnteringResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteringResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
