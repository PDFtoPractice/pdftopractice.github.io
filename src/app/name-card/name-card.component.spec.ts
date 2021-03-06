import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCardComponent } from './name-card.component';
import { MaterialImportsModule } from '../material-imports/material-imports.module';


describe('NameCardComponent', () => {
  let component: NameCardComponent;
  let fixture: ComponentFixture<NameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCardComponent ],
      imports: [MaterialImportsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
