import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Advice } from './model/Advice';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AdviceService {

  constructor(private http : Http) { }

  getAdvice(drug : string, operation : string) : Observable<Advice> {
    // Current url for testing with mock backend running locally
    return this.http.get('http://localhost:5000/api?drug='+drug+'&operation='+operation)
            .map((res : Response) => res.json());
  }
}
