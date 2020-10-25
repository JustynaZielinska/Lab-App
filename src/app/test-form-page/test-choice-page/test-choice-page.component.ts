import { Component } from '@angular/core';

@Component({
  selector: 'app-test-choice-page',
  templateUrl: './test-choice-page.component.html',
  styleUrls: ['./test-choice-page.component.scss']
})
export class TestChoicePageComponent {

choosenTest: string
btnThyroid: boolean;
btnLipids:boolean;
chooseTest(test){
  this.choosenTest = test;
 }

}
