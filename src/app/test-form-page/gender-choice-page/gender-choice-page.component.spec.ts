import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChoicePageComponent } from './gender-choice-page.component';

describe('GenderChoicePageComponent', () => {
  let component: GenderChoicePageComponent;
  let fixture: ComponentFixture<GenderChoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderChoicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderChoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
