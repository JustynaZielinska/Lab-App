import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICurrentPageData } from '../interfaces/InterfaceCurrentPageData';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

lastValidPage = new BehaviorSubject<null | 'gender' | 'test' | 'lipids' | 'thyroid'>(null);
currentForm = new BehaviorSubject<null | 'gender-choice' | 'test-choice' | 'entering-results'>('test-choice');
isNavigationHidden = new BehaviorSubject<true | false>(false);

public hideNavigation(newValue: true | false): void{
  this.isNavigationHidden.next(newValue);
}

public changeIsValid(newValue: null | 'gender' | 'test' | 'lipids' | 'thyroid'): void {
  this.lastValidPage.next(newValue);
}

public changeCurrentForm(newValue: null | 'gender-choice' | 'test-choice' | 'entering-results'): void {
  this.currentForm.next(newValue);
}

changeIsEnabledProperty(isValid: null | string, title: string): boolean;
changeIsEnabledProperty(isValid: null | string, title, title2: string): boolean;

public changeIsEnabledProperty(isValid: null | string, title: string, title2?: string): boolean{
  if (title2) {
    if ((isValid === title ) || (isValid === title2)){
      return true;
    } else { return false; }
  } else {
    if (isValid === title) {
      return true;
    } else { return false; }
  }
}

changeNavigationProperties(currentForm, lastValidPage): ICurrentPageData{
  let previousPath = '';
  let previousForm = '';
  let nextPath = '';
  let nextForm = '';
  let pageTitle = '';
  let isEnabled = null;
  switch (currentForm) {
    case 'test-choice':
      previousPath = 'home-page';
      previousForm = null;
      nextPath = 'test-form-page';
      nextForm = 'gender-choice';
      pageTitle = 'Wybierz płeć';
      isEnabled = this.changeIsEnabledProperty(lastValidPage, 'test');
      return { previousPath, previousForm, nextPath, nextForm, pageTitle, isEnabled };
    case 'gender-choice':
      previousPath = 'test-form-page';
      previousForm = 'test-choice';
      nextPath = 'test-form-page';
      nextForm = 'entering-results';
      pageTitle = 'Wpisz wyniki';
      isEnabled = this.changeIsEnabledProperty(lastValidPage, 'gender');
      return { previousPath, previousForm, nextPath, nextForm, pageTitle, isEnabled };
    case 'entering-results':
      previousPath = 'test-form-page';
      previousForm = 'gender-choice';
      nextPath = 'interpretation';
      pageTitle = 'Interpretacja';
      isEnabled = this.changeIsEnabledProperty(lastValidPage, 'thyroid', 'lipids');
      return { previousPath, previousForm, nextPath, nextForm, pageTitle, isEnabled };
    }
  }
}
