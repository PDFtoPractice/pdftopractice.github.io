import { Observable } from 'rxjs/Observable';

import { Advice } from './model/Advice';

export class MockAdviceService {
  constructor() { }

  getAdvice(drug : string, operation : string) : Observable<Advice> {
    return Observable.create((observer) => {
      observer.next(new Advice(drug, '', operation, '', 'Consult a doctor'));
    });
  }
}
