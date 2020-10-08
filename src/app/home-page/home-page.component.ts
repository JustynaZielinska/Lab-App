import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  animations: [
    trigger('isVisible', [
      transition(':enter', [
    query('.description span', [
      style({opacity:0, transform: 'translateY(2rem'}),
      stagger(800, [
        animate('1s', style ({opacity:1, transform:'none'}))
      ])
    ])
    ])
    ]),],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
isVisible = false

ngOnInit (): void{
  this.isVisible = true
  }
}
