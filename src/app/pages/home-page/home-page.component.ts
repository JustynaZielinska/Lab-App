import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  animations: [
    trigger('isVisible', [
      transition(':enter', [
    query('.description span', [
      style({opacity: 0, transform: 'translateY(3rem)'}),
      stagger(600, [
        animate('1.1s 1.2s', style ({opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
    ])
    ]),
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  isVisible: boolean;

ngOnInit(): void{
  this.isVisible = true;
}}
