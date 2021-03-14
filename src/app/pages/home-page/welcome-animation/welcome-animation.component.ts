import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-result-icon',
  animations: [
    trigger('isLoad', [
      transition(':enter', [
      query('.line', [
      style({transform: 'translateX(-5rem)'}),
      stagger(300, [
        animate('.6s 3.6s', style ({transform: 'none'}))
      ])
      ])
    ])
    ])],
  templateUrl: './welcome-animation.component.html',
  styleUrls: ['./welcome-animation.component.scss'],
})
export class ResultIconComponent implements OnInit {
  isLoad = false;
  isActive = false;

  ngOnInit(): void{
    this.isLoad = true;
    setTimeout(() => {this.isActive = true; }, 100); }
}
