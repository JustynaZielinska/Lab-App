import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, style, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-result-icon',
  animations: [
    trigger('isLoad', [
      transition(':enter', [
      query('.line', [
      style({transform: 'translateX(-4rem)'}),
      stagger(500, [
        animate('.7s 3.8s', style ({transform: 'none'}))
      ])
      ])
    ])
    ])],
  templateUrl: './result-icon.component.html',
  styleUrls: ['./result-icon.component.scss'],
})
export class ResultIconComponent implements OnInit {
  isLoad = false;
  isActive = false;

  ngOnInit (): void{
    this.isLoad = true;
    setTimeout(()=>{this.isActive = true}, 100)}
}