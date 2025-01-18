import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrormessagesService {

  constructor() { }
  readonly errorMessages={
    required : "is required",
    productNameRequired : `Name is required`,
    minLength:'Min Length is 3',
    productDescriptionRequired : "Description is required",
    productCategoryRequired : "Category is required",
    productQuantityRequired : "Quantity is required",
    productCostPriceRequired : "Cost Price is required",
    productSellingPriceRequired : "Selling Price is required",
    productImageRequired : "Product Image is required"
  }
}
