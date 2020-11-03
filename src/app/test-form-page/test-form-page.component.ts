import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit {

  constructor(private service: NavigationService){}
  
  formPage: null | 'gender-choice' | 'test-choice' | 'entering-results' ;

  ngOnInit(): void {
    this.service.currentForm.subscribe(currentForm => {this.formPage = currentForm});
  }

}
  