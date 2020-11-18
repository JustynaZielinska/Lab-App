import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipidsFormPageComponent } from './lipids-form-page.component';

describe('LipidsFormPageComponent', () => {
  let component: LipidsFormPageComponent;
  let fixture: ComponentFixture<LipidsFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipidsFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipidsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
