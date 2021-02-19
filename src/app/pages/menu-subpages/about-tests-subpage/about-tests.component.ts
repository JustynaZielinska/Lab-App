import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests-subpage',
  templateUrl: './about-tests.component.html',
  styleUrls: ['./about-tests.component.scss']
})
export class AboutTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentTest: 'Hormony tarczycy' | 'Profil lipidowy';
 tests = [
   {name: 'Hormony tarczycy', items:[
     {name: 'TSH', description: ''},
     {name: 'Ft4', description: ''},
     {name: 'Ft3', description: ''}
   ]},
   {name: 'Profil lipidowy', items:[
    {name: 'Cholesterol', description: ''},
    {name: 'Cholesterol HDL', description: ''},
    {name: 'Cholesterol LDL', description: ''},
    {name: 'Triglicerydy', description:''}
  ]}
]
toggleTest(item): void{
  this.currentTest = item
  console.log(this.currentTest)
}
 }
