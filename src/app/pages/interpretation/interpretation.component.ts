import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { LipidsService } from '../../core/services/lipids.service';
import { ThyroidService } from '../../core/services/thyroid.service';
import { combineLatest } from 'rxjs';
import { ITest } from '../../core/interfaces/InterfaceTest';

@Component({
  selector: 'app-interpretation',
  templateUrl: './interpretation.component.html',
  styleUrls: ['./interpretation.component.scss']
})
export class InterpretationComponent implements OnInit {

  constructor(public navigationService: NavigationService, public lipidsService: LipidsService, public thyroidService: ThyroidService ){}
  gender: 'male' | 'female';
  lastValidPage: 'gender' | 'test' | 'lipids' | 'thyroid';
  results: ITest[];
  message: string;

  ngOnInit(): void {
    this.navigationService.lastValidPage.subscribe(isValid => {this.lastValidPage = isValid; });
    if (this.lastValidPage === 'thyroid'){
      this.thyroidService.thyroidResults.subscribe(results => {
      this.results = results;
      this.thyroidService.changeFlag(this.results);
      this.message = this.thyroidService.getUserThyroidIntrepretation(this.results);
    });
  } else if (this.lastValidPage === 'lipids'){
    const connectStream = combineLatest([this.lipidsService.lipidsResults, this.lipidsService.choosenGender]);
    const subscribe = connectStream.subscribe(([userLipids, userGender]) => {
    this.results = userLipids;
    this.gender = userGender;
    this.lipidsService.changeFlag(this.results);
    this.message = this.lipidsService.getUserLipidsInterpretation(this.results, this.gender);
  });
} else { this.message = 'Ups... coś poszło nie tak. Wybierz badanie ponownie'; }
}
}
