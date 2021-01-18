import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidFormComponent } from './thyroid-form.component';

describe('ThyroidFormPageComponent', () => {
  let component: ThyroidFormComponent;
  let fixture: ComponentFixture<ThyroidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThyroidFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThyroidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
