import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products:any = [];
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];
  constructor(private api: ApiAdminService, private router: Router) {}

  ngOnInit(): void {
    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }
}
