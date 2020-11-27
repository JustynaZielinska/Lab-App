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
  validTest: null | 'lipids' | 'thyroid';

submitResults(results): void{
this.validTest = results;
this.validResults.emit(this.validTest);
}
}
