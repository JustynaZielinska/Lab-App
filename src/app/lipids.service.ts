import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class LipidsService {
  gender: 'male' | 'female';
  min: number;
  max: number;
  name: string;
  value: number;
  results: ITest[];
  flag: -1 | 0 | 1;
  flags: number[];
  chol: number;
  hdl: number;
  ldl: number;
  tg: number;

  lipidsResults = new BehaviorSubject<ITest[]>(null);
  choosenGender = new BehaviorSubject<null | 'male' | 'female'>(null);

  public getUserLipidsInterpretation(results, gender): string{
      const flags = results.map(result => result.flag);
      const values = this.assignResults(results);
      const ratioLdl = (this.hdl / this.ldl);
      const ratioChol = (this.chol / this.hdl);
      const lipidsInterpretation = this.getLipidsIntrepretation(flags);
      const ratioLdlInterpretation = this.getRatioLdlInterpretation(ratioLdl);
      const ratioCholIntrepretation = this.getRatioCholInterpretation(gender, ratioChol);
      const messages = [lipidsInterpretation, ratioLdlInterpretation, ratioCholIntrepretation];
      const message = messages.join(' ');
      return message;
  }

  public pushResults(newResults: ITest[]): void{
    this.lipidsResults.next(newResults);
  }
  public validGender(gender: 'male' | 'female'): void{
    this.choosenGender.next(gender);
  }

  public assignResults(results: ITest[]): void{
    for (const result of results){
      switch (result.name){
        case 'Cholesterol':
          this.chol = result.value;
          break;
        case 'Cholesterol HDL':
          this.hdl = result.value;
          break;
        case 'Cholesterol LDL':
          this.ldl = result.value;
          break;
        case 'Triglicerydy':
          this.tg = result.value;
          break;
        }
      }
  }
  public changeFlag(results): void{
    for (const result of results){
      this.value = result.value;
      this.name = result.name;
      if (this.name === 'Cholesterol'){
      this.min = result.min;
      this.max = result.max;
      this.compare(); }
      else if (this.name === 'Cholesterol HDL'){
        if (this.gender === 'male'){
          this.min = 40;
        } else { this.min = 45; }
        this.compareToMin();
      } else {
        this.max = result.max;
        this.compareToMax(); }
      result.flag = this.flag;
  }
}
  public compare(): void{
    if (this.value < this.min){
      this.flag = -1;
  } else if (this.value > this.max){
      this.flag = 1;
  } else { this.flag = 0; }
}
  public compareToMax(): void{
    if (this.value > this.max){
      this.flag = 1;
    } else { this.flag = 0; }
  }
  public compareToMin(): void{
    if (this.value < this.min){
      this.flag = -1;
    } else { this.flag = 0; }
  }
  public getLipidsIntrepretation(results): string {
    if (results.every(element => element === 0)) {
      return 'Wszystkie wpisane przez Ciebie wyniki znajdują się w granicach wartości pożądanych, co świadczy o prawidłowej gospodarce lipidowej Twojego organizmu.';
  } else if (results.some(element => element !== 0)) {
      return 'Wpisane przez Ciebie wyniki mogą świadczyć o zaburzeniach gospodarki lipidowej. Wskazana jest konsultacja lekarska.';
    }
  }
  public getRatioLdlInterpretation(ratioLdl): string{
    if (ratioLdl < 0.33) {
      return 'Wskaźnikiem aterogenności, czyli ryzyka chorób sercowo-naczyniowych związanych z nieprawidłową gospodarką lipidową jest stosunek cholesterolu HDL do cholesterolu LDL. Wskaźnik ten prawidłowo powinien wynosić od 1:3 do 1:2, tzn. że stężenie cholesterolu LDL powinno być maksymalnie 3 razy większe niż stężenie cholesterolu HDL. Twoje stężenie cholesterolu LDL jest zbyt duże w stosunku do cholesterolu HDL, co może się wiązać ze zwiększeniem ryzyka chorób sercowo-naczyniowych.';
  } else {
      return 'Wskaźnikiem aterogenności, czyli ryzyka chorób sercowo-naczyniowych związanych z nieprawidłową gospodarką lipidową jest stosunek cholesterolu HDL do cholesterolu LDL. Wskaźnik ten prawidłowo powinien wynosić od 1:3 do 1:2, tzn. że stężenie cholesterolu LDL powinno być maksymalnie 3 razy większe niż stężenie cholesterolu HDL. Twoje stężenie cholesterolu LDL nie przekracza trzykrotności HDL, co jest dobrym wynikiem.';
    }
  }
  public getRatioCholInterpretation(gender, ratioChol): string{
    if (gender === 'male'){
      if (ratioChol < 3.4) {
        return 'Innym wskaźnikiem aterogenności jest stosunek stężenia cholesterolu całkowitego do stężenia cholesterolu HDL. U mężczyzn powinien on być niższy niż 3.4. U Ciebie stosunek obu tych frakcji jest mniejszy niż podany indeks, co wskazuje na niskie ryzyko chorób sercowo-naczyniowch.';
      } else if (ratioChol > 9) {
        return 'Innym wskaźnikiem aterogenności jest stosunek stężenia cholesterolu całkowitego do stężenia cholesterolu HDL. U mężczyzn powinien on być niższy niż 3.4. U Ciebie stosunek obu tych jest większy niż 9, co może wskazywać na podwyższone ryzyko chorób sercowo-naczyniowch.';
  }} else if (gender === 'female') {
      if (ratioChol < 3.3) {
        return 'Innym wskaźnikiem aterogenności jest stosunek stężenia cholesterolu całkowitego do stężenia cholesterolu HDL (prawidłowo u kobiet powinien wynosić <3.3). U Ciebie stosunek obu tych frakcji jest mniejszy niż podany indeks, co wskazuje na niskie ryzyko chorób sercowo-naczyniowch związanych z nieprawidłową gospodarką lipidową.';
      } else if (ratioChol > 7) {
        return 'Innym wskaźnikiem atreogenności jest stosunek stężenia cholesterolu całkowitego do stężenia cholesterolu HDL (prawidłowo u kobiet powinien wynosić <3.3). U Ciebie stosunek obu tych frakcji jest większy niż 7, co może wskazywać na podwyższone ryzyko chorób sercowo-naczyniowch związanych z nieprawidłową gospodarką lipidową.';
      }
    }
  }
}
