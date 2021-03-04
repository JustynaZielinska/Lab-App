import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: NavigationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ NavigationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(NavigationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should call service.changeIsValid(null) when user clicked "logo" link`, () => {
    const linkSpy = spyOn(service, 'changeIsValid');
    const logoLink = fixture.debugElement.query(By.css('[test-id="logoLink"]'));

    logoLink.triggerEventHandler('click', {});
    
    expect(linkSpy).toHaveBeenCalledTimes(1);
    expect(linkSpy).toHaveBeenCalledWith(null);
  });
  
  it(`should call service.hideNavigation() when user clicked "burger" button`, () => {
    const burgerSpy = spyOn(service, 'hideNavigation');
    const burgerButton = fixture.debugElement.query(By.css('[test-id="burgerButton"]'));

    burgerButton.triggerEventHandler('click', {});
    
    expect(burgerSpy).toHaveBeenCalledTimes(1);
    expect(burgerSpy).toHaveBeenCalledWith(component.isMenuActive);
  });

  it(`when isMenuActive value equal to "false" and user clicked "burger" button then should isMenuActive value switched to "true"`, () => {
    component.isMenuActive = false;
    fixture.detectChanges();
    const burgerButton = fixture.debugElement.query(By.css('[test-id="burgerButton"]'));

    burgerButton.triggerEventHandler('click', {});
    
    expect(component.isMenuActive).toBeTruthy();
  });

  it(`when isMenuActive value equal to "true" and user clicked "burger" button then should isMenuActive value switched to "false"`, () => {
    component.isMenuActive = true;
    fixture.detectChanges();
    const burgerButton = fixture.debugElement.query(By.css('[test-id="burgerButton"]'));

    burgerButton.triggerEventHandler('click', {});
    
    expect(component.isMenuActive).toBeFalse();
  });
});
