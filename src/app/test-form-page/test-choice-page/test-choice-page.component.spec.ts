import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChoicePageComponent } from './test-choice-page.component';

describe('TestChoicePageComponent', () => {
  let component: TestChoicePageComponent;
  let fixture: ComponentFixture<TestChoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestChoicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestChoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
