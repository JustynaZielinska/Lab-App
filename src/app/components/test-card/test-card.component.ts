import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {

  @Input()
  test;

  @Input()
  description;

  constructor() { }

  ngOnInit(): void {
  }

}
