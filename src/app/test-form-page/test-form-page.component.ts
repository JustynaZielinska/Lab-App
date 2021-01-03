import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { LipidsService } from '../lipids.service';
import { ThyroidService } from '../thyroid.service';
import { ITest } from '../test-form-page/entering-results-page/InterfaceTest';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit{

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
