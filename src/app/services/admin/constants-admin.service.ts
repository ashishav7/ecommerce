import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsAdminService {
  constructor() { }
  readonly labelMessages={
    menuHeader1 : "Products",
    menuHeader2 : "Login",
    menuHeader3 : "Cart",
  }
}
