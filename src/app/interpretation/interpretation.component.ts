import { Component, OnInit } from '@angular/core';
import { LipidsService } from '../lipids.service';
import { ThyroidService } from '../thyroid.service';
import { ITest } from '../test-form-page/entering-results-page/InterfaceTest';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
  messages: string[];
  chol: number;
  hdl: number;
  ldl: number;
  tg: number;
  ratioLdl: number;
  ratioChol: number;
  lipidsInterpretation: string;
  ratioCholIntrepretation: string;
  ratioLdlInterpretation: string;

  ngOnInit(): void {
  //  this.thyroidService.thyroidResults.subscribe(results => {
  //    this.results = results;
  //    this.thyroidService.changeFlag(this.results);
  //    this.flags = results.map(result => result.flag);
  //    this.resultsFlags = this.flags.join(',');
  //    this.message = this.thyroidService.getInterpretation(this.resultsFlags);
  //   });
  this.lipidsService.choosenGender.subscribe(gender => {
    this.gender = gender;
  });
  this.lipidsService.lipidsResults.subscribe(results => {
  this.results = results;
  this.lipidsService.changeFlag(this.results);
  this.flags = results.map(result => result.flag);
  for (const result of this.results){
    switch (result.name){
      case 'Cholesterol':
        this.chol = result.value;
        break;
      case 'Cholesterol HDL':
        this.hdl = result.value;
        break;
      case 'Cholesterol LDL':
        this.ldl = result.value;
        break;
      case 'Triglicerydy':
        this.tg = result.value;
        break;
     }
    }
  });
  this.ratioLdl = (this.hdl / this.ldl);
  this.ratioChol = (this.chol / this.hdl);
  this.lipidsInterpretation = this.lipidsService.getLipidsIntrepretation(this.flags);
  this.ratioLdlInterpretation = this.lipidsService.getRatioLdlInterpretation(this.ratioLdl);
  this.ratioCholIntrepretation = this.lipidsService.getRatioCholInterpretation(this.gender, this.ratioChol);
  this.messages = [this.lipidsInterpretation, this.ratioLdlInterpretation, this.ratioCholIntrepretation];
  this.message = this.messages.join(' ');
  }
}
