import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardComponent } from './data-card.component';

import { FormsModule } from '@angular/forms';

import { MaterialImportsModule } from '../material-imports/material-imports.module';

import { AdviceService } from '../advice.service';

describe('DataCardComponent', () => {
  let component: DataCardComponent;
  let fixture: ComponentFixture<DataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCardComponent ],
      imports: [
        FormsModule,
        MaterialImportsModule
      ],
      providers: [AdviceService]
    })
    .compileComponents();
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
