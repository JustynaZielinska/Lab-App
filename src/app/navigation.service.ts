import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICurrentPageData } from './navigation/InterfaceCurrentPageData';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

currentUrl: string;
isValid: null | 'gender' | 'test' | 'lipids' | 'thyroid';
currentPageData: ICurrentPageData;
lastValidPage = new BehaviorSubject<null | 'gender' | 'test' | 'lipids' | 'thyroid'>(null);
currentForm = new BehaviorSubject<null | 'gender-choice' | 'test-choice' | 'entering-results'>(null);

public changeIsValid(newValue: null | 'gender' | 'test' | 'lipids' | 'thyroid'): void {
  this.lastValidPage.next(newValue);
}

public changeCurrentForm(newValue: null | 'gender-choice' | 'test-choice' | 'entering-results'): void {
  this.currentForm.next(newValue);
}

changeNavigationProperties(currentForm, isValid): ICurrentPageData{
  switch (currentForm) {
    case 'test-choice':
      let previousPath = 'home-page';
      let previousForm = null;
      let nextPath = 'test-form-page';
      let nextForm = 'gender-choice';
      let pageTitle = 'Wybierz płeć';
      let isEnabled = this.changeIsEnabledProperty(isValid, 'test');
      break;
    case 'gender-choice':
      previousPath = 'test-form-page';
      previousForm = 'test-choice';
      nextPath = 'test-form-page';
      nextForm = 'entering-results';
      pageTitle = 'Wpisz wyniki';
      isEnabled = this.changeIsEnabledProperty(isValid, 'gender');
      break;
    case 'entering-results':
      previousPath = 'test-form-page';
      previousForm = 'gender-choice';
      nextPath = 'interpretation';
      pageTitle = 'Interpretacja';
      isEnabled = this.changeIsEnabledProperty(isValid, 'thyroid', 'lipids');
      return {previousPath, previousForm, nextPath, nextForm, pageTitle, isEnabled}; }
}
changeIsEnabledProperty(isValid, title: string, title2?: string): boolean{
  if ((isValid === title ) || (isValid === title2)){
    return true;
  } else { return false; }
}
}
