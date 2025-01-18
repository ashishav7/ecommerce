import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  labels: any = {};
  labelsAdmin: any = {};
  CS: any;
  searchQuery: string = '';
  sortOption: string = '';
  filteredProducts: any[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  paginatedProducts: any[] = [];
  
  constructor(
    private api: ApiAdminService,
    private router: Router,
    labels: ConstantsService,
    labelsAdmin: ConstantsAdminService,
    common: CommonService
  ) {
    this.CS = common;
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
  }

  ngOnInit(): void {
    console.log(this.labels);
    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
    this.filteredProducts = [...this.products];
    this.updatePaginatedProducts();
  }


  applyFilter() {
    this.filteredProducts = this.products.filter((product:any) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.updatePaginatedProducts();
  }

  applySort() {
    this.filteredProducts.sort((a, b) => {
      const valueA = a[this.sortOption];
      const valueB = b[this.sortOption];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB); // String comparison
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB; // Numeric comparison
      }
      return 0;
    });
    this.updatePaginatedProducts();
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

}
