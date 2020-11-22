import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entering-results-page',
  templateUrl: './entering-results-page.component.html',
  styleUrls: ['./entering-results-page.component.scss']
})
export class EnteringResultsPageComponent implements OnInit {

  @Input() currentTest;
  @Input() currentGender;

  constructor() { }

  ngOnInit(): void {
  }

}
