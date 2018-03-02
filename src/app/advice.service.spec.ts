import { TestBed, inject } from '@angular/core/testing';

import { AdviceService } from './advice.service';
import { MockAdviceService } from './mock-advice.service';

import { Results } from './model/Results';

import { Observable } from 'rxjs/Observable';

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
    mockService.getAdvice('drug', 'operation').subscribe((advice : Results) => {
      expect(advice.source).toBe('source');
      expect(advice.drug).toBe('drug');
      expect(advice.link).toBe('link');
      expect(advice.advice).toBe('advice');
    });
  });
});
