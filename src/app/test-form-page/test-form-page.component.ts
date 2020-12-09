import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { ResultsService } from 'src/app/results.service';
import { ITest } from '../test-form-page/entering-results-page/InterfaceTest';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit{

  constructor(public navigationService: NavigationService, public resultsService: ResultsService ){}

  test: null | 'lipids'|'thyroid';
  gender: null | 'male'|'female';
  form: null | 'lipids' | 'thyroid';
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;
  userResults: ITest[];

  ngOnInit(): void {
    this.navigationService.currentForm.subscribe(currentForm => {this.formPage = currentForm; });
  }

  validTest(test): void{
    this.test = test;
    this.navigationService.changeIsValid('test');
  }
  validGender(gender): void{
    this.gender = gender;
    this.navigationService.changeIsValid('gender');
  }
  validForm(form): void{
    this.form = form;
    this.navigationService.changeIsValid(this.form);
  }
  sendResults(results): void{
    this.userResults = results;
    this.resultsService.pushResults(this.userResults);
  }
}
