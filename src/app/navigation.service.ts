import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

lastValidPage = new Subject<null | 'gender' | 'test' | 'results'>()

public getIsValid(): Observable<null | 'gender' | 'test' | 'results'> {
  return this.lastValidPage.asObservable();
}

public changeIsValid(newValue: null | 'gender' | 'test' | 'results') {
  this.lastValidPage.next(newValue)
}
}

