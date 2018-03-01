import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatTabsModule, MatDividerModule, MatListModule, MatIconModule, MatMenuModule,  MatProgressSpinnerModule, MatAutocompleteModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
<<<<<<< HEAD
    MatProgressSpinnerModule
=======
    MatAutocompleteModule
>>>>>>> origin/master
  ],
  declarations: []
})
export class MaterialImportsModule { }
