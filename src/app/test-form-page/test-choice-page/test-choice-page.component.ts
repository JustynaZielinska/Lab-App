import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-choice-page',
  templateUrl: './test-choice-page.component.html',
  styleUrls: ['./test-choice-page.component.scss']
})
export class TestChoicePageComponent{

  testForm: FormGroup;
  test: null | 'lipids' | 'thyroid';
  gender: null | 'lipids' | 'thyroid';
  @Output() selectedTest = new EventEmitter<string>();

  constructor() {
    this.testForm = new FormGroup({
      test: new FormControl()
    }); }

   changeTest(test): void{
    this.test = test;
    this.selectedTest.emit(test);
}}
