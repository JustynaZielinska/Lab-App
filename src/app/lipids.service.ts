import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class LipidsService {
  gender: 'male' | 'female';
  min: number;
  minFemale: number;
  minMale: number;
  max: number;
  name: string;
  value: number;
  flag: -1 | 0 | 1;

  lipidsResults = new BehaviorSubject<ITest[]>(null);
  choosenGender = new BehaviorSubject<null | 'male' | 'female'>(null);

  public pushResults(newResults: ITest[]): void{
    this.lipidsResults.next(newResults);
  }
  public validGender(gender: 'male' | 'female'): void{
    this.choosenGender.next(gender);
  }

  public changeFlag(results): void{
    for (const result of results){
      this.value = result.value;
      this.name = result.name;
      if (this.name === 'Cholesterol'){
      this.min = result.min;
      this.max = result.max;
      this.compare(); }
      else if (this.name === 'Cholesterol HDL'){
        if (this.gender === 'male'){
          this.min = 40;
        } else { this.min = 45; }
        this.compareToMin();
      } else {
        this.max = result.max;
        this.compareToMax(); }
      result.flag = this.flag;
  }
}
  public compare(): void{
    if (this.value < this.min){
      this.flag = -1;
  } else if (this.value > this.max){
      this.flag = 1;
  } else { this.flag = 0; }
}
  public compareToMax(): void{
    if (this.value > this.max){
      this.flag = 1;
    } else { this.flag = 0; }
  }
  public compareToMin(): void{
    if (this.value < this.min){
      this.flag = -1;
    } else { this.flag = 0; }
  }
}
