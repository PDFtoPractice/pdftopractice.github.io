import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Results } from './model/Results';

import { QueryType } from './enums/queryType';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AdviceService {

  constructor(private http : Http) { }

  getAdvice(type : QueryType, value1 : string, value2 : string) : Observable<Results> {
    // Current url for testing with mock backend running locally
    switch(type) {
      case QueryType.DrugInteraction:
        return this.http.get('http://localhost:5000/api/interaction?value1='+value1+'&value2='+value2)
          .map((res : Response) => res.json());
      case QueryType.DrugCondition:
        return this.http.get('http://localhost:5000/api/condition?value1='+value1+'&value2='+value2)
          .map((res : Response) => res.json());
      case QueryType.DrugOperation:
        return this.http.get('http://localhost:5000/api/operation?value1='+value1+'&value2='+value2)
          .map((res : Response) => res.json());
    }
  }
}
