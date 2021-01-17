import { Component, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { NavigationStart, Router } from '@angular/router';
import { filter, combineLatest } from 'rxjs/operators';
import { ICurrentPageData } from 'src/app/core/interfaces/InterfaceCurrentPageData';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

constructor(public navigationService: NavigationService, private router: Router) {}

isHidden = true;
currentUrl: string;
currentForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
isValid: null | 'gender' | 'test' | 'lipids' | 'thyroid';
currentPageData: ICurrentPageData;

goBack(): void {
  this.navigationService.changeIsValid(null);
}

changeCurrentForm(form): void{
  this.navigationService.changeCurrentForm(form);
}

ngOnInit(): void{
  console.log(this.isHidden);
  this.currentPageData = {
    pageTitle: 'Wybierz badanie',
    previousPath: '',
    nextPath: '',
    previousForm: '',
    nextForm: '',
    isEnabled: false,
};
  this.router.events
  .pipe(filter(event => event instanceof NavigationStart))
  .subscribe((event: NavigationStart) => {
    this.currentUrl = event.url;
    const connectStream = combineLatest([this.navigationService.lastValidPage, this.navigationService.currentForm]);
    const subscribe = connectStream.subscribe(([lastValidPage, currentForm]) => {
    this.isValid = lastValidPage;
    this.currentForm = currentForm;
    if (this.currentUrl === '/home-page' ) {
      this.currentPageData.pageTitle = 'Wybierz badanie';
      this.isHidden = true;
    } else if (this.currentUrl === '/test-form-page') {
      this.isHidden = false;
      this.currentPageData = this.navigationService.changeNavigationProperties(this.currentForm, this.isValid);
      console.log(this.currentPageData);
    } else if (this.currentUrl === '/interpretation') {
      this.isHidden = true;
      this.currentPageData.pageTitle = 'Wybierz badanie ponownie';
    } else { this.isHidden = false; }
  });
  });
}
}
