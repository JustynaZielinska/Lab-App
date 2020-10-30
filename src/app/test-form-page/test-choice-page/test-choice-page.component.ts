import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-test-choice-page',
  templateUrl: './test-choice-page.component.html',
  styleUrls: ['./test-choice-page.component.scss']
})
export class TestChoicePageComponent{

constructor(private service: NavigationService) {}

selectedTest: 'lipids'|'thyroid';

selectTest(test){
  this.selectedTest = test;
  this.service.lastValidPage.next('test');
}
}
