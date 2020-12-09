import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';
import { ITest } from '../test-form-page/entering-results-page/InterfaceTest';

@Component({
  selector: 'app-interpretation',
  templateUrl: './interpretation.component.html',
  styleUrls: ['./interpretation.component.scss']
})
export class InterpretationComponent implements OnInit {

  constructor(public resultsService: ResultsService){}
  results: ITest[];

  ngOnInit(): void {
    this.resultsService.results.subscribe(results => {
    this.results = results.filter(result => result.value !== null);
    });
  }
}
