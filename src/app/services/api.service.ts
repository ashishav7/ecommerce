import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCategories(){
    return [
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
      {
        categoryId: 1,
        categoryName: 'Electronics',
      },
    ];
  }
}
