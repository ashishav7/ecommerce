import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsAdminService {
  constructor() { }
  readonly labelMessages={
    menuHeader1 : "Products",
    menuHeader2 : "Category Management",
    menuHeader3 : "Cart",
  }
}
