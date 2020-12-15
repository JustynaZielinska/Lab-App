import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entering-results-page',
  templateUrl: './entering-results-page.component.html',
  styleUrls: ['./entering-results-page.component.scss']
})
export class EnteringResultsPageComponent {

  @Input() currentTest;
  @Input() currentGender;
  @Output() validResults = new EventEmitter<string>();
  @Output() lipidsResults = new EventEmitter<object>();
  @Output() thyroidResults = new EventEmitter<object>();
  validTest: null | 'lipids' | 'thyroid';
  lipids: object;
  thyroid: object;

submitResults(results): void{
  this.validTest = results;
  this.validResults.emit(this.validTest);
}

sendLipids(lipids): void{
  this.lipids = lipids;
  this.lipidsResults.emit(this.lipids);
}
sendThyroid(thyroid): void{
  this.thyroid = thyroid;
  this.thyroidResults.emit(this.thyroid);
}
}
