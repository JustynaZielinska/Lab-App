import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipidsFormComponent } from './lipids-form.component';

describe('LipidsFormPageComponent', () => {
  let component: LipidsFormComponent;
  let fixture: ComponentFixture<LipidsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipidsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipidsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
