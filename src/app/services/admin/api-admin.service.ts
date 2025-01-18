import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {
  private products = [
    { id: 1, name: 'Product 1', description: 'Description 1',quantity:10, costPrice: 350,category: "Electronics",sellingPrice:150,image: "assets/DSC_5356.JPG" },
    { id: 2, name: 'Product 2', description: 'Description 2',quantity:10, costPrice: 200,category: "Electronics2",sellingPrice:250,image: "assets/DSC_5356.JPG" },
    { id: 2, name: 'Product 2', description: 'Description 2',quantity:10, costPrice: 200,category: "Electronics2",sellingPrice:250,image: "assets/DSC_5356.JPG" },
    { id: 2, name: 'Product 2', description: 'Description 2',quantity:10, costPrice: 200,category: "Electronics2",sellingPrice:250,image: "assets/DSC_5356.JPG" },
    { id: 2, name: 'Product 2', description: 'Description 2',quantity:10, costPrice: 200,category: "Electronics2",sellingPrice:250,image: "assets/DSC_5356.JPG" },
    { id: 2, name: 'Product 2', description: 'Description 2',quantity:10, costPrice: 200,category: "Electronics2",sellingPrice:250,image: "assets/DSC_5356.JPG" },
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<any> {
    return of(this.products.find((product) => product.id === id));
  }

  addProduct(product: any): Observable<any> {
    product.id = this.products.length + 1;
    this.products.push(product);
    return of(product);
  }

  editProduct(id: number, updatedProduct: any): Observable<any> {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...updatedProduct, id };
      return of(this.products[index]);
    }
    return of(null);
  }

  constructor(private http: HttpClient) { }
}
