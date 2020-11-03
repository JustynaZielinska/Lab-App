import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringResultsPageComponent } from './entering-results-page.component';

describe('EnteringResultsPageComponent', () => {
  let component: EnteringResultsPageComponent;
  let fixture: ComponentFixture<EnteringResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnteringResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
