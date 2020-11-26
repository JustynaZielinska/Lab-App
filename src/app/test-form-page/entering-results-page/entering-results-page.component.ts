import { Component, OnInit, Input, Output, DoCheck, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entering-results-page',
  templateUrl: './entering-results-page.component.html',
  styleUrls: ['./entering-results-page.component.scss']
})
export class EnteringResultsPageComponent implements DoCheck {

  @Input() currentTest;
  @Input() currentGender;
  @Output() validResults= new EventEmitter<string>(); 
  validTest: null | 'lipids' | 'thyroid'

  constructor() { }

  ngDoCheck(): void {
    }

submitResults(results){
this.validTest = results;
this.validResults.emit(this.validTest)
}
}
