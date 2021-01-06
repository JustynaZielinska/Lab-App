import { Component, OnInit } from '@angular/core';
import { LipidsService } from '../lipids.service';
import { ThyroidService } from '../thyroid.service';
import { ITest } from '../test-form-page/entering-results-page/InterfaceTest';

@Component({
  selector: 'app-interpretation',
  templateUrl: './interpretation.component.html',
  styleUrls: ['./interpretation.component.scss']
})
export class InterpretationComponent implements OnInit {

  constructor(public lipidsService: LipidsService, public thyroidService: ThyroidService ){}
  gender: 'male' | 'female';
  results: ITest[];
  value: number;
  min: number;
  max: number;
  flag: -1 | 0 | 1;
  flags: number[];
  resultsFlags: string;
  message: string;

  ngOnInit(): void {
  //  this.thyroidService.thyroidResults.subscribe(results => {
  //    this.results = results;
  //    this.thyroidService.changeFlag(this.results);
  //    this.flags = results.map(result => result.flag);
  //    this.resultsFlags = this.flags.join(',');
  //    this.message = this.thyroidService.getInterpretation(this.resultsFlags);
  //   });
  this.lipidsService.lipidsResults.subscribe(results => {
  this.results = results;
  this.lipidsService.changeFlag(this.results);
  this.flags = results.map(result => result.flag);
  });
  this.lipidsService.interpretation.subscribe(interpretation => {
    this.message = interpretation;
  });
}
}
