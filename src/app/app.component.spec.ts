import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { NameCardComponent } from './name-card/name-card.component';
import { DescriptionCardComponent } from './description-card/description-card.component';
import { DataCardComponent } from './data-card/data-card.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResultsCardComponent } from './results-card/results-card.component';

import { MaterialImportsModule } from './material-imports/material-imports.module';

import { FormsModule } from '@angular/forms';

import { AdviceService } from './advice.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NameCardComponent,
        DescriptionCardComponent,
        DataCardComponent,
        NavigationComponent,
        ResultsCardComponent
      ],
      imports: [
        FormsModule,
        MaterialImportsModule
      ],
      providers: [AdviceService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
