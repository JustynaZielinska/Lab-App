import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITest } from './test-form-page/entering-results-page/InterfaceTest';

@Injectable({
  providedIn: 'root'
})
export class ThyroidService {
min: number;
max: number;
value: number;
flag: -1 | 0 | 1;

thyroidResults = new BehaviorSubject<ITest[]>(null);

  public pushResults(newResults: ITest[]): void{
    this.thyroidResults.next(newResults);
  }

  public changeFlag(results): void{
    for (const result of results){
      this.value = result.value;
      this.min = result.min;
      this.max = result.max;
      if (this.value < this.min){
          this.flag = -1;
      } else if (this.value > this.max){
          this.flag = 1;
      } else { this.flag = 0; }
      result.flag = this.flag;
  }
}

public getInterpretation(flags: string): string{
  switch (flags) {
    case '0,0,0':
        return 'Wszystkie Twoje wyniki znajdują się w granicach wartości pożądanych, co może świadczyć o prawidłowym funkcjonowaniu tarczycy. Jeżeli jednak odczuwasz jakieś dolegliwości charakterystycze dla niedoczynności lub nadczynności tarczycy skonsultuj wyniki z lekarzem POZ, który po przeprowadzeniu wywiadu uzyska pełniejszy obraz kliniczny.';
    case '1,0,0':
       return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na subkliniczną (utajoną) niedoczynność tarczycy. Przy tego typu niedoczynności objawy mogą być delikatne lub trudne do zauważenia, dlatego ważna jest obserwacja pod kontem wystąpienia specyficznych dla niedoczynności objawów: zmęczenie, apatia, senność/problemy z zasypianiem, spadki nastroju czy nietolerancja zimna. Wskazana jest konsultacja wyników u endokrynologa.';
    case '1,-1,-1':
    case '1,0,-1':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na pierwotną niedoczynność tarczycy. Do objawów pierwotnej niedoczynności tarczycy należą: silne uczucie zmęczenia, problemy skórne i wypadanie włosów, gwałtowny przyrost masy ciała czy obrzęki. W przypadku podejrzenia pierwotnej niedoczynności tarczycy można dodatkowo wykonać badanie anty-TPO czyli stężenie przeciwciał przeciwko peroksydazie (swoisty antygen tarczycy). Wskazana jest konsultacja endokrynologiczna. ';
    case '-1,-1,-1':
    case '-1,0,-1':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na wtórną niedoczynność tarczycy. Ten rodzaj niedoczynności spowodowany jest zmniejszoną produkcją tyreotropiny przez przysadkę mózgową. Tyreotropina pobudza tarczycę do produkcji tyroksyny (Ft4) i trójjodotyroniny (Ft3), w związku z czym zmniejszenie stężenia tyreotropiny w organizmie powoduje zmniejszenie stężenia Ft3 i Ft4 uwalnianych przez tarczycę. Zalecamy skonsultowanie wyników z lekarzem endokrynologiem.';
    case '0,-1,-1':
    case '0,0,-1':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na trzeciorzędową niedoczynność tarczycy. Ten typ niedoczynności występuje rzadko, spowodowany jest obniżeniem ilości tyreoliberyny (TRH) wydzielanej przez podwzgórze. Wskazana jest konsultacja wyników u endokrynologa.';
    case '-1,0,0':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na subkliniczną nadczynność tarczycy. Przy tego typu nadoczynności objawy mogą być delikatne lub trudne do zauważenia, dlatego ważna jest obserwacja pod kontem wystąpienia specyficznych dla nadoczynności objawów: nerwowość, drażliwość, bezsenność czy przyspieszone bicie serca. Wskazana jest konsultacja wyników u endokrynologa, który może dodatkowo zlecić badanie USG tarczycy w celu potwierdzenia diagnozy.';
    case '-1,1,1':
    case '-1,0,1':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na pierwotną nadczynność tarczycy. Najczęstszą przyczyną pierwotnej nadczynności tarczycy jest choroba Gravesa-Basedowa. Dodatkowym badaniem jakie można wykonać w celu potiwerdzenia tej choroby jest oznaczenie poziomu TRAb, czyli przeciwciał skierowanych przeciwko receptorowi TSH (są one obecne w 90% przypadków osób z chorobą Gravesa-Basedowa). Zalecamy konsultację endokrynologiczną.';
    case '1,1,1':
    case '1,0,1':
    case '0,1,1':
    case '0,0,1':
        return 'Wpisane przez Ciebie wartości wyników mogą wskazywać na wtórną nadczynność tarczycy. Ten rodzaj nadoczynności spowodowany jest zwiększoną produkcją tyreotropiny przez przysadkę mózgową. Tyreotropina pobudza tarczycę do produkcji tyroksyny (Ft4) i trójjodotyroniny (Ft3), w związku z czym podwyższona ilość tyreotropiny uwalnianej przez przysadkę mózgową powoduje zwiększenie ilości Ft3 i Ft4 uwalnianych przez tarczycę. Wskazana jest konsultacja endokrynologiczna.';
    default:
        return 'Wpisane przez Ciebie wyniki mogą wskazywać na nieprawdłowości w funkcjonowaniu tarczycy. Jeżeli odczuwasz jakieś dolegliwości charakterystycze dla niedoczynności lub nadczynności tarczycy skonsultuj wyniki z lekarzem POZ, który po przeprowadzeniu wywiadu uzyska pełniejszy obraz kliniczny.';
    }
}
}
