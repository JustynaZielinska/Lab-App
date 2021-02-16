import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: '<p>Strona nie została znaleziona :(</p>',
  styles: ['p { font-size: 1rem; text-align:center; margin: 6rem 0 }']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
