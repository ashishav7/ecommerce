import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  labels: any = {};
  categories: any = {};
  labelsAdmin: any = {};
  constructor(
    labels: ConstantsService,
    labelsAdmin: ConstantsAdminService,
    public router: Router,
    private api: ApiService
  ) {
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
  }
  ngOnInit(): void {
    this.categories = this.api.getCategories();
  }

  goToMenuHeader1() {
    this.router.navigate(['/admin-panel/products']);
  }
  goToMenuHeader2() {
    this.router.navigate(['/admin-panel']);
  }
  goToMenuHeader3() {
    this.router.navigate(['/admin-panel/orders']);
  }
}
