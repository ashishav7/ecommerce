import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:any = [];
  labels:any ={};
  labelsAdmin:any = {};
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  constructor(private api: ApiAdminService,
    private router: Router,
    labels:ConstantsService,
    labelsAdmin: ConstantsAdminService) {
      this.labels=labels.labelMessages;
      this.labelsAdmin=labelsAdmin.labelMessages;
    }

  ngOnInit(): void {
    console.log(this.labels);
    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(id: number): void {
    this.router.navigate(['/admin-panel/products/edit', id]);
  }
}
