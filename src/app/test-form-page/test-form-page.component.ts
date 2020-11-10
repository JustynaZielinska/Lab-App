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
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;

  ngOnInit(): void {
    this.service.currentForm.subscribe(currentForm => {this.formPage = currentForm});
  }

  validTest(test){
    this.test = test
    this.service.changeIsValid('test');
  }

  validGender(gender){
    this.gender = gender;
    this.service.changeIsValid('gender');
  }
}
  