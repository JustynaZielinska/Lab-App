import { Component, OnInit } from '@angular/core';
import { LipidsService } from '../lipids.service';
import { ThyroidService } from '../thyroid.service';
import { combineLatest } from 'rxjs';
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
  message: string;

  ngOnInit(): void {
    this.thyroidService.thyroidResults.subscribe(results => {
    this.results = results;
    this.thyroidService.changeFlag(this.results);
    this.message = this.thyroidService.getUserThyroidIntrepretation(this.results);
  });
 // const connectStream = combineLatest([this.lipidsService.lipidsResults, this.lipidsService.choosenGender]);
 // const subscribe = connectStream.subscribe(([userLipids, userGender]) => {
 //   this.results = userLipids;
 //   this.gender = userGender;
 //   this.lipidsService.changeFlag(this.results);
 //   this.message = this.lipidsService.getUserLipidsInterpretation(this.results, this.gender);
//  });
}
}
