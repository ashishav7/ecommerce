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
  constructor(labels: ConstantsService, labelsAdmin: ConstantsAdminService,router:Router) {
  }

  ngOnInit(): void {
    console.log(this.labels);
  }
 
}
