import { TestBed, inject } from '@angular/core/testing';

import { AdviceService } from './advice.service';
import { MockAdviceService } from './mock-advice.service';

import { Observable } from 'rxjs/Observable';
import { Advice } from './model/Advice';

let mockService;
describe('AdviceService', () => {
  beforeEach(() => {
    mockService = new MockAdviceService();
    TestBed.configureTestingModule({
      providers: [{ provide: AdviceService, useClass: MockAdviceService }]
    });
  });

  it('should be created', () => {
    expect(mockService).toBeTruthy();
  });

  it('should return advice observable', () => {
    mockService.getAdvice('DrugA', 'OperationA').subscribe((advice : Advice) => {
      expect(advice.drug).toBe('DrugA');
      expect(advice.operation).toBe('OperationA');
      expect(advice.advice).toBe('Consult a doctor');
    });
  });
});
