import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit{

  constructor(public service: NavigationService){}
  
  test: null | 'lipids'|'thyroid';
  gender: null | 'male'|'female';
  results: null | 'lipids' | 'thyroid';
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;

  ngOnInit(): void {
    this.service.currentForm.subscribe(currentForm => {this.formPage = currentForm});
  }

  validTest(test){
    this.test = test;
    this.service.changeIsValid('test');
  }
  validGender(gender){
    this.gender = gender;
    this.service.changeIsValid('gender');
  }
  validResults(results){
    this.results = results;
    this.service.changeIsValid(this.results)}
  }
