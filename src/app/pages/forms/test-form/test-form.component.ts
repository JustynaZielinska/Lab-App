import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-choice-page',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent{

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
