import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  readonly labelMessages={
    appName : "E-Commerce",
    clientSideName : "E-Commerce Client Side",
    actions:"Actions",
    description:"Description",
    name:"Name",
    image:"Image",
    sellingPrice:"Sale Price",
    costPrice:"Cost Price",
    quantity:"Quantity",
    category:"Category",
    productNamePlaceholder: "Product Name Placeholder",
    productDescriptionPlaceholder : "Product Description Placeholder",
    productSellingPricePlaceholder: "Product Selling Price Placeholder",
    productCostPricePlaceholder: "Product Cost Price Placeholder",
    productQuantityPlaceholder : "Product Quantity Placeholder"
  };
}
