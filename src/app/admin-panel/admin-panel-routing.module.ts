import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [{ path: '', component: AdminPanelComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },
    { path: 'orders', loadChildren: () => import('./components/orders/orders.module').then(m => m.OrdersModule) }
  ]
 }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
