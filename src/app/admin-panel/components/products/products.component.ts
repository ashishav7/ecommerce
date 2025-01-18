import { Component, OnInit } from '@angular/core';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  addProductBtn: any = {};
  searchBtnConfig: any = {};
  sortBtnConfig: any = {};
  paginationConfig:any = {};
  labels: any = {};
  constructor(private api: ApiAdminService, labels: ConstantsService) {
    this.labels = labels.labelMessages;
  }

  ngOnInit(): void {
    this.addProductBtn = {
      view: true,
      tooltip: this.labels.addProduct,
      routingLink: '/admin-panel/products/add',
      tooltipPosition: 'above',
    };

    this.searchBtnConfig = {
      label: this.labels.searchProductLabel,
      placeholder: this.labels.searchProductPlaceholder,
    };

    this.sortBtnConfig = {
      required: true,
      label: this.labels.sortByLabel,
      options: [
        { value: 'name', name: 'Name' },
        { value: 'category', name: 'Category' },
        { value: 'costPrice', name: 'Price' },
      ],
    };
    this.paginationConfig = {
      required: true,
      pagesize: 10,
      pageSizeOptions: [5, 10, 20],
    };

    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
