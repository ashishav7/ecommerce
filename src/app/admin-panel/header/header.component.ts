import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  labels: any = {};
  labelsAdmin: any = {};
  router:Router;
  constructor(labels: ConstantsService, labelsAdmin: ConstantsAdminService,router:Router) {
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
    this.router=router;
  }

  ngOnInit(): void {
    console.log(this.labels);
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
