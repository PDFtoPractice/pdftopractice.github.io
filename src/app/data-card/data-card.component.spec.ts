import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardComponent } from './data-card.component';
import { ResultsCardComponent } from '../results-card/results-card.component';

import { FormsModule } from '@angular/forms';

import { MaterialImportsModule } from '../material-imports/material-imports.module';

import { AdviceService } from '../advice.service';
import { MockAdviceService } from '../mock-advice.service';

describe('DataCardComponent', () => {
  let component: DataCardComponent;
  let fixture: ComponentFixture<DataCardComponent>;

  let mockService;
  beforeEach(async(() => {
    mockService = new MockAdviceService();
    TestBed.configureTestingModule({
      declarations: [
        DataCardComponent,
        ResultsCardComponent
      ],
      imports: [
        FormsModule,
        MaterialImportsModule
      ],
      providers: [{ provide: AdviceService, useClass: MockAdviceService }]
    })
    .compileComponents();

    TestBed.overrideComponent(DataCardComponent, {
      set: {
        providers: [
          { provide: AdviceService, useClass: MockAdviceService }
        ]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
