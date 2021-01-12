import { Component, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ICurrentPageData } from './InterfaceCurrentPageData';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

constructor(public navigationService: NavigationService, private router: Router) {}

currentPageData: ICurrentPageData ;
isEnabled: boolean;
isHidden: boolean;
isDisabled: boolean;
currentUrl: string;
currentForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
isValid: null | 'gender' | 'test' | 'lipids' | 'thyroid';

goBack(): void {
  this.navigationService.changeIsValid(null);
}

changeCurrentForm(form): void{
  this.navigationService.changeCurrentForm(form);
}

ngOnInit(): void{
  this.router.events
  .pipe(filter(event => event instanceof NavigationEnd))
  .subscribe((event: NavigationEnd) => {
    this.currentUrl = event.url;
    const connectStream = combineLatest([this.navigationService.lastValidPage, this.navigationService.currentForm]);
    const subscribe = connectStream.subscribe(([lastValidPage, currentForm]) => {
    this.isValid = lastValidPage;
    this.currentForm = currentForm;
    if (this.currentUrl === '/home-page') {
      this.currentPageData.pageTitle = 'Wybierz badanie';
      this.isHidden = true;
     }else if (this.currentUrl === '/test-form-page') {
     this.isHidden = false;
     this.currentPageData = this.navigationService.changeNavigationProperties(this.currentForm, this.isValid);
     } else if (this.currentUrl === '/interpretation') {
      this.isHidden = true;
      this.currentPageData.pageTitle = 'Wybierz badanie ponownie';
    }else { this.isHidden = false; }
  });
  });
}
}
