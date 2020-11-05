import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  lastValidPage = new BehaviorSubject<null | 'gender' | 'test' | 'results'>(null)
  
  public changeIsValid(newValue: null | 'gender' | 'test' | 'results') {
    this.lastValidPage.next(newValue)
  }

  currentForm = new BehaviorSubject<null | 'gender-choice' | 'test-choice' | 'entering-results'>(null)

  public changeCurrentForm(newValue: null | 'gender-choice' | 'test-choice' | 'entering-results') {
    this.currentForm.next(newValue)
  }

}


