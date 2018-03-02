import { Observable } from 'rxjs/Observable';

import { Results } from './model/Results';

export class MockAdviceService {
  constructor() { }

  getAdvice(drug : string, operation : string) : Observable<Results> {
    return Observable.create((observer) => {
      observer.next(new Results('source', 'drug', 'link', 'advice'));
    });
  }
}
