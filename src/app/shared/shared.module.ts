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
  import{ MatSidenavModule } from '@angular/material/sidenav';
  import { MatBadgeModule } from '@angular/material/badge';
  import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CardItemComponent } from './component/card-item/card-item.component';
import { ItemListingComponent } from './component/item-listing/item-listing.component';
import { RouterModule } from '@angular/router';
  @NgModule({
    declarations: [
    DialogsComponent,
    SidebarComponent,
    CardItemComponent,
    ItemListingComponent
  ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,

      // Material Modules
      RouterModule,
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
      MatDialogModule,
      MatSidenavModule,
      MatBadgeModule,
      MatSidenavModule,
      MatListModule,
      MatPaginatorModule
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
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatPaginatorModule,

    SidebarComponent,
    CardItemComponent,
    ItemListingComponent
  ]
  })
  export class SharedModule { }
