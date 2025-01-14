  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { MatCardModule } from '@angular/material/card';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatInputModule } from '@angular/material/input';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MatSelectModule } from '@angular/material/select';
  import { MatOptionModule } from '@angular/material/core';
  import { MatTableModule } from '@angular/material/table';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatButtonModule } from '@angular/material/button';  
  import { MatIconModule } from '@angular/material/icon';
  import { MatTooltipModule } from '@angular/material/tooltip';
  import {MatDialogModule} from '@angular/material/dialog';
import { DialogsComponent } from './component/dialogs/dialogs.component';

  @NgModule({
    declarations: [
    DialogsComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,

      // Material Modules
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatOptionModule,
      MatTableModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatTooltipModule,
      MatDialogModule
    ],
  exports: [
    // Export the Material Modules to make them available in other modules
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,

    DialogsComponent
  ]
  })
  export class SharedModule { }
