import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubpageComponent } from './about-subpage.component';

describe('AboutSubpageComponent', () => {
  let component: AboutSubpageComponent;
  let fixture: ComponentFixture<AboutSubpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSubpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSubpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
