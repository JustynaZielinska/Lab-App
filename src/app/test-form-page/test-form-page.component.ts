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
  currentTest: null | 'lipids'|'thyroid';
  currentGender: null | 'male'|'female';
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;

  ngOnInit(): void {
    this.service.currentForm.subscribe(currentForm => {this.formPage = currentForm});
  }

  validTest(test){
    this.currentTest = test;
    console.log(this.currentTest);
    this.service.changeIsValid('test');
  }
  validGender(gender){
    this.currentGender = gender;
    console.log(this.currentGender);
    this.service.changeIsValid('gender');
  }
}
  