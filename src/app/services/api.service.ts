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
        code:"Code",
        name:"ZElectronics",
        image:"assets/DSC_5356.JPG",
        slug:"Category Slug",
        description:"Category Description"
      },
      {
        code:"Code2",
        name:"Electronics2",
        image:"assets/DSC_5356.JPG",
        slug:"Category Slug2",
        description:"Category Description2"
      },
      {
        code:"Code3",
        name:"Electronics3",
        image:"assets/DSC_5356.JPG",
        slug:"Category Slug3",
        description:"Category Description3"
      }
    ];
  }
}
