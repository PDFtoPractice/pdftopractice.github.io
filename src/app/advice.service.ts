import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Results } from './model/Results';

import { QueryType } from './enums/queryType';

import { Links } from './links';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AdviceService {

  constructor(private http : Http) { }

  getAdvice(type : QueryType, value1 : string, value2 : string) : Observable<Results[]> {
    switch(type) {
      case QueryType.DrugInteraction:
        return this.http.get(Links.DrugInteraction+'?drug1='+value1+'&drug2='+value2)
          .map((res : Response) => res.json());
      case QueryType.DrugCondition:
        return this.http.get(Links.DrugCondition+'?drug='+value1+'&condition='+value2)
          .map((res : Response) => res.json());
      case QueryType.DrugOperation:
        return this.http.get(Links.DrugPerioperative+'?drug='+value1+'&operation='+value2)
          .map((res : Response) => res.json());
    }
  }
}
