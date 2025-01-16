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
        categoryId: 2,
        categoryName: 'Electronics2',
      },
      {
        categoryId: 3,
        categoryName: 'Electronics3',
      },
      {
        categoryId: 4,
        categoryName: 'Electronics4',
      },
      {
        categoryId: 5,
        categoryName: 'Electronics5',
      }
    ];
  }
}
