export class MockAdviceService {
  constructor() { }

  getAdvice(drug : string, operation : string) {
    return 'Go to a doctor';
  }
}
