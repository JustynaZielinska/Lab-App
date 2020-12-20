import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EnteringResultsPageComponent } from './test-form-page/entering-results-page/entering-results-page.component';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class ThyroidService {
 results: ITest[];
 result: ITest;
 min: number;
 max: number;
value: number;
flag: -1 | 0 | 1;
thyroidResults = new BehaviorSubject<ITest[]>(null);
thyroidInterpretation = new BehaviorSubject<string>(null);
thyroidFlag = new BehaviorSubject<number>(null);

  public pushResults(newResults: ITest[]): void{
    this.thyroidResults.next(newResults);
  }

  public setFlag(results): void{
    for (const result of results){
      this.value = result.value;
      this.min = result.min;
      this.max = result.max;
      if (this.value < this.min){
          this.flag = -1;
      } else if (this.value > this.max){
          this.flag = 1;
      } else { this.flag = 0; }
      result.flag = this.flag;
  }
}
}
