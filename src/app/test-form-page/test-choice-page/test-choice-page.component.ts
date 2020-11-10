import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-test-choice-page',
  templateUrl: './test-choice-page.component.html',
  styleUrls: ['./test-choice-page.component.scss']
})
export class TestChoicePageComponent{

constructor() {}

@Input() test

@Output() selectedTest= new EventEmitter<string>();

selectTest(test){
  this.test = test;
  this.selectedTest.emit(test);
};
}
