import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  results = new BehaviorSubject<ITest[]>(null);

  public pushResults(newResults: ITest[]): void{
    this.results.next(newResults);
  }
}
