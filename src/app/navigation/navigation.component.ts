import { Component, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter, withLatestFrom } from 'rxjs/operators';
import { ICurrentPageData } from 'src/app/core/interfaces/InterfaceCurrentPageData';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

constructor(public navigationService: NavigationService, private router: Router) {}

isHidden: boolean;
currentPageData: ICurrentPageData;

goBack(): void {
  this.navigationService.changeIsValid(null);
}

changeCurrentForm(form): void{
  this.navigationService.changeCurrentForm(form);
}

ngOnInit(): void{
  this.currentPageData = {
    pageTitle: '',
    previousPath: '',
    nextPath: '',
    previousForm: '',
    nextForm: '',
    isEnabled: false,
};
  this.router.events
  .pipe(
    filter(event => event instanceof NavigationEnd),
    withLatestFrom(
      this.navigationService.lastValidPage,
      this.navigationService.currentForm
    ),
  )
  .subscribe(([
    event,
    lastValidPage,
    currentForm,
  ]) => {
    const currentUrl = (event as NavigationEnd).urlAfterRedirects;
    if (currentUrl === '/home-page' ) {
      this.currentPageData.pageTitle = 'Wybierz badanie';
      this.isHidden = true;
    } else if (currentUrl === '/test-form-page') {
      this.isHidden = false;
      console.log(lastValidPage);
      this.currentPageData = this.navigationService.changeNavigationProperties(currentForm, lastValidPage);
    } else if (currentUrl === '/interpretation') {
      this.isHidden = true;
      this.currentPageData.pageTitle = 'Wybierz badanie ponownie';
    } else { this.isHidden = false; }
  });
  }
}
