import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class LipidsService {

  lipidsResults = new BehaviorSubject<ITest[]>(null);

  public pushResults(newResults: ITest[]): void{
    this.lipidsResults.next(newResults);
  }
}
