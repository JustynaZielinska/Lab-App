import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThyroidFormPageComponent } from './thyroid-form-page.component';

describe('ThyroidFormPageComponent', () => {
  let component: ThyroidFormPageComponent;
  let fixture: ComponentFixture<ThyroidFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThyroidFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThyroidFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
