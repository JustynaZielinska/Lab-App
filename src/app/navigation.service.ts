import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  lastValidPage = new BehaviorSubject<null | 'gender' | 'test' | 'lipids' | 'thyroid'>(null);

  currentForm = new BehaviorSubject<null | 'gender-choice' | 'test-choice' | 'entering-results'>(null);

  public changeIsValid(newValue: null | 'gender' | 'test' | 'lipids' | 'thyroid'): void {
    this.lastValidPage.next(newValue);
  }

  public changeCurrentForm(newValue: null | 'gender-choice' | 'test-choice' | 'entering-results'): void {
    this.currentForm.next(newValue);
  }
}


