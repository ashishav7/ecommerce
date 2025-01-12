import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { HeaderComponent } from './header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';  


@NgModule({
  declarations: [
    AdminPanelComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AdminPanelModule { }
