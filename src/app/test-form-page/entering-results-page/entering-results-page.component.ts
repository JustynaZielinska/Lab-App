import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITest } from '../entering-results-page/InterfaceTest';

@Component({
  selector: 'app-entering-results-page',
  templateUrl: './entering-results-page.component.html',
  styleUrls: ['./entering-results-page.component.scss']
})
export class EnteringResultsPageComponent {

  @Input() currentTest;
  @Input() currentGender;
  @Output() validForm = new EventEmitter<string>();
  @Output() userLipids = new EventEmitter<ITest[]>();
  @Output() userThyroid = new EventEmitter<ITest[]>();
  test: null | 'lipids' | 'thyroid';
  thyroidResults: ITest[];
  lipidsResults: ITest[];

validTest(test: null | 'lipids' | 'thyroid'): void{
  this.test = test;
  this.validForm.emit(this.test);
}
sendThyroidResults(thyroidResults: ITest[]): void{
  this.thyroidResults = thyroidResults;
  this.userThyroid.emit(this.thyroidResults);
}
sendLipidsResults(lipidsResults: ITest[]): void{
  this.lipidsResults = lipidsResults;
  this.userLipids.emit(this.lipidsResults);
}
}
