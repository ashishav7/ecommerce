import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  labels: any = {};
  labelsAdmin: any = {};
  dataSource: any;
  CS: any;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'category',
    'costPrice',
    'sellingPrice',
    'image',
    'action',
  ];
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
    common: CommonService,
    public dialog: MatDialog,
    public dialogService: DialogService
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
    this.dataSource = new MatTableDataSource(this.products);
  }

  editProduct(product: any): void {
    this.CS.product = product;
    this.router.navigate(['/admin-panel/products/edit']);
  }
  deleteProduct(product: any): void {
    this.dialogService
      .confirm(this.labels.deleteProduct, this.labels.deleteDialogMessage)
      .subscribe((res) => {
        if (res) {
          //call the delete api
        }
      });
  }

  applyFilter() {
    this.filteredProducts = this.products.filter((product:any) =>
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
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
