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
  @Output() userResults = new EventEmitter<ITest[]>();
  test: null | 'lipids' | 'thyroid';
  results: ITest[];

validTest(test): void{
  this.test = test;
  this.validForm.emit(this.test);
}

sendResults(results): void{
  this.results = results;
  this.userResults.emit(this.results);
}
}
