import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderFormComponent } from './gender-form.component';

describe('GenderChoicePageComponent', () => {
  let component: GenderFormComponent;
  let fixture: ComponentFixture<GenderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
