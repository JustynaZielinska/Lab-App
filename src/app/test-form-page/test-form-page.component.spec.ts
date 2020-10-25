import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormPageComponent } from './test-form-page.component';

describe('TestFormPageComponent', () => {
  let component: TestFormPageComponent;
  let fixture: ComponentFixture<TestFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
