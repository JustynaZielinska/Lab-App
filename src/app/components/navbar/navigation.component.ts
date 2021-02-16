import { Component, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { ICurrentPageData } from 'src/app/core/interfaces/InterfaceCurrentPageData';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

constructor(public navigationService: NavigationService, private router: Router) {}

isButtonHidden: boolean;
currentPageData: ICurrentPageData;
isNavigationVisible: boolean;

resetIsValid(): void {
  this.navigationService.changeIsValid(null);
}

changeCurrentForm(form): void{
  this.navigationService.changeCurrentForm(form);
}

ngOnInit(): void{
combineLatest([
  this.router.events.pipe(filter(event => event instanceof NavigationEnd)),
  this.navigationService.lastValidPage,
  this.navigationService.currentForm,
  this.navigationService.isNavigationHidden])
  .subscribe(([
    event,
    lastValidPage,
    currentForm,
    isHidden
  ]) => {
    this.isNavigationVisible = isHidden;
    this.currentPageData = {
      pageTitle: '',
      previousPath: '',
      nextPath: '',
      previousForm: '',
      nextForm: '',
      isEnabled: false,
  };
    const currentUrl = (event as NavigationEnd).urlAfterRedirects;
    if (currentUrl === '/home-page' ) {
      this.currentPageData.pageTitle = 'Wybierz badanie';
      this.isButtonHidden = true;
    } else if (currentUrl === '/test-form-page') {
      this.isButtonHidden = false;
      this.currentPageData = this.navigationService.changeNavigationProperties(currentForm, lastValidPage);
    } else if (currentUrl === '/interpretation') {
      this.isButtonHidden = true;
      this.currentPageData.pageTitle = 'Wybierz badanie ponownie';
    } else { this.isButtonHidden = true; 
      this.currentPageData.pageTitle = 'Wybierz badanie'}
  });
  }
}
