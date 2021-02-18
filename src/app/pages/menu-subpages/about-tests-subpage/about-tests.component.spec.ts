import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsSubpageComponent } from './about-tests.component';

describe('TestsSubpageComponent', () => {
  let component: TestsSubpageComponent;
  let fixture: ComponentFixture<TestsSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestsSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
