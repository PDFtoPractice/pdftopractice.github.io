import { TestBed, inject } from '@angular/core/testing';

import { AdviceService } from './advice.service';
import { MockAdviceService } from './mock-advice.service';

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
});
