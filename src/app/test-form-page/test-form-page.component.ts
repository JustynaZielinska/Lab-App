import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-test-form-page',
  templateUrl: './test-form-page.component.html',
  styleUrls: ['./test-form-page.component.scss']
})
export class TestFormPageComponent implements OnInit {

  currentForm: string;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    // this.navigationService.changeIsValid('gender');
  }

  onGenderSubmit() {
    this.currentForm = 'test';
  }

}
