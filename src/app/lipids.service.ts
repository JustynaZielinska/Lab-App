import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class LipidsService {
  min: number;
  minFemale: number;
  minMale: number;
  max: number;
  value: number;
  flag: -1 | 0 | 1;

  lipidsResults = new BehaviorSubject<ITest[]>(null);

  public pushResults(newResults: ITest[]): void{
    this.lipidsResults.next(newResults);
  }
}
