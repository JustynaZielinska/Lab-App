import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  lastValidPage = new Subject<null | 'gender' | 'test' | 'results'>()
  
  public changeIsValid(newValue: null | 'gender' | 'test' | 'results') {
    this.lastValidPage.next(newValue)
  }

  currentForm = new Subject<null | 'gender-choice' | 'test-choice' | 'entering-results'>()

  public changeCurrentForm(newValue: null | 'gender-choice' | 'test-choice' | 'entering-results') {
    this.currentForm.next(newValue)
  }

}


