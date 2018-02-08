import { Injectable } from '@angular/core';

@Injectable()
export class AdviceService {

  constructor() { }

  getAdvice(drug : string, operation : string) {
    return "Advice: ..."; // This will query backend
  }
}
