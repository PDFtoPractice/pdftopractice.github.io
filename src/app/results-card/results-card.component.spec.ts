import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCardComponent } from './results-card.component';

import { MaterialImportsModule } from '../material-imports/material-imports.module';

describe('ResultsCardComponent', () => {
  let component: ResultsCardComponent;
  let fixture: ComponentFixture<ResultsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsCardComponent ],
      imports: [ MaterialImportsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
