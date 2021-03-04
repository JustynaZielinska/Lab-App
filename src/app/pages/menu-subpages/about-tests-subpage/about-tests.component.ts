import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-tests-subpage',
  templateUrl: './about-tests.component.html',
  animations: [
    trigger('enterLeave', [
      transition( ':enter', [
        query('li', [
          style({opacity: 0, transform: 'translateY(-20px)'}),
          stagger(200,
            animate('0.3s', style({opacity: 1, transform: 'translateY(0)'})))
        ])
      ]),
      transition( ':leave', [
        query('li', [
          style({opacity: 1, transform: 'translateY(0)'}),
          stagger(100,
            animate('0.2s', style({opacity: 0, transform: 'translateY(-20px)'})))
        ])
      ])
    ])
  ],
  styleUrls: ['./about-tests.component.scss']
})
export class AboutTestsComponent implements OnInit {

  constructor() { }

  currentTest: 'Hormony tarczycy' | 'Profil lipidowy';
  selectedTest: string;
  description: string;

  tests = [
   {name: 'Hormony tarczycy', items: [
     {name: 'TSH',
     description: 'TSH czyli tyreotropina, to hormon produkowany przez przysadkę mózgową. Jego zadaniem jest pobudzanie tarczycy do produkcji i wydzielania hormonów: trójjodotyroniny – T3 oraz tyroksyny – T4. Przysadka mózgowa zwiększa wydzielanie TSH, jeśli w organizmie występuje zbyt niskie stężenie T3 i T4 oraz zmniejsza wydzielane TSH w przypadku, gdy hormonów tarczycy jest za dużo. Oznaczenie TSH to podstawowe badanie w diagnostyce niedoczynności oraz nadczynności tarczycy. Badanie TSH pozwala także na monitorowanie leczenia u pacjentów z niedoczynnością tarczycy.'},
     {name: 'Ft4',
     description: 'Tyroksyna inaczej tetrajodotyronina (Ft4) jest hormonem tarczycowym, którego głownym zadaniem jest regulacja procesu przemiany materii. Stężenie FT4, podobniej jak FT3, zależy od ilości hormonu tyreotropowego (TSH), wytwarzanego przez przysadkę mózgową. Oznaczenie poziomu Ft4 powinno się wykonywać zawsze z oznaczeniem TSH, gdyż oba badania dadzą pełniejszy obraz funkcjonowania tarczycy.'},
     {name: 'Ft3',
     description: 'Ft3, czyli trójjodotyronina jest to hormon produkowany przez tarczycę, natomiast w większości powstaje z rozpadu Ft4 w tkankach. Stężenie FT3, podobniej jak FT4, zależy od ilości hormonu tyreotropowego (TSH), wytwarzanego przez przysadkę mózgową. Jego główną funkcją jest tak samo jak w pryzpadku Ft4 regulowanie procesu przemiany materii. Badanie poziomu Ft3 powinno być wykonywane jednocześnie z oznaczeniem TSH oraz Ft4.'}
   ]},
   {name: 'Profil lipidowy', items: [
    {name: 'Cholesterol',
    description: 'Cholesterol całkowity jest to substancja tłuszczowa obecna we krwi, a także będąca składnikiem błon większości komórek organizmu. Cholesterol wykorzystywany jest do produkcji niektórych hormonów (np. płciowych), w syntezie kwasów żółciowych, odgrywa także rolę w wytwarzaniu witaminy D.'},
    {name: 'Cholesterol HDL',
    description: 'Cholesterol HDL (tzw. "dobry cholesterol") jest to frakcja cholesterolu całkowitego odpowiedzialna m.in. za usuwanie lipidów ze ścian naczyń krwionośnych. Dzięki temu działaniu przyczynia się do zapobiegania chorób układu krwionośnego np. miażdżycy.'},
    {name: 'Cholesterol LDL',
    description: 'Cholesterol LDL (tzw. "zły cholesterol") jest to frakcja cholestrolu całkowitego odpowiedzialna za transport lipidów z wątroby do tkanek m.in. do ścian naczyń krwionośnych. Odkładanie się cholesterolu w ścianach tętnic może powodować miażdżycę.'},
    {name: 'Triglicerydy',
    description: 'Triglicerydy są cząsteczkami tłuszczu, które dostarczają energię organizmowi. Większość trafia do organizmu wraz z pokarmami, a ich nadmiar powoduje odkładanie się tkanki tłuszczowej. Wysoki poziom triglicerydów zwiększa także ryzyko wystąpienia cukrzycy typu II czy chorób sercowo-naczyniowych.'}
  ]}
];
toggleMenu(item): void{
  if (this.currentTest === item){
    this.currentTest = null;
  } else {
  this.currentTest = item; }
}
toogleTest(test, description): void{
  this.selectedTest = test;
  this.description = description;
}
ngOnInit(): void {

}}
