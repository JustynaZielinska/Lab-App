import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';
import { LipidsService } from '../../core/services/lipids.service';
import { ThyroidService } from '../../core/services/thyroid.service';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { ITest } from '../../core/interfaces/InterfaceTest';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './forms.component.html',
  animations: [
    trigger('routerAnimation', [
      transition('test-choice => gender-choice, gender-choice => entering-results', [
          query(':enter', style({ transform: 'translateX(50%)', opacity: 0 })),
          query(':leave', style({ transform: 'translateX(0)', opacity: 1 })),
          query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })),
          group([
              query(':leave', [
                  animate('0.4s', style({ transform: 'translateX(-50%)', opacity: 0 })),
              ]),
              query(':enter', [
                animate('0.4s', style({ transform: 'translateX(0)', opacity: 1 })),
          ]),
      ]),
  ]),
  transition('gender-choice => test-choice, entering-results => gender-choice', [
    query(':enter', style({ transform: 'translateX(-50%)', opacity: 0 })),
    query(':leave', style({ transform: 'translateX(0)', opacity: 1 })),
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })),
    group([
        query(':leave', [
            animate('0.4s', style({ transform: 'translateX(100%)', opacity: 0 })),
        ]),
        query(':enter', [
          animate('0.4s', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
]),
])
])
],
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

  constructor(public navigationService: NavigationService, public lipidsService: LipidsService, public thyroidService: ThyroidService ){}

  test: null | 'lipids'|'thyroid';
  gender: null | 'male'|'female';
  form: null | 'lipids' | 'thyroid';
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;
  userLipids: ITest[];
  userThyroid: ITest[];

  ngOnInit(): void {
    this.navigationService.currentForm.subscribe(currentForm => {this.formPage = currentForm; });
  }

  validTest(test): void{
    this.test = test;
    this.navigationService.changeIsValid('test');
  }
  validGender(gender): void{
    this.gender = gender;
    this.lipidsService.validGender(this.gender);
    this.navigationService.changeIsValid('gender');
  }
  validForm(form): void{
    this.form = form;
    this.navigationService.changeIsValid(this.form);
  }
  sendLipids(results): void{
    this.userLipids = results;
    this.lipidsService.pushResults(this.userLipids);
  }
  sendThyroid(results): void{
    this.userThyroid = results;
    this.thyroidService.pushResults(this.userThyroid);
  }
}
