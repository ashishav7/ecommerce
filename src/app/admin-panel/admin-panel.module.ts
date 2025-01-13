import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdminPanelComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ]
})
export class AdminPanelModule { }
