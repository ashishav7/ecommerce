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
    productQuantityPlaceholder : "Product Quantity Placeholder",
    productListingHeader:"Products",
    deleteDialogMessage:"Are you sure you want to delete your product?",
    no: "No",
    yes:"Yes",
    deleteProduct:"Delete Product",
    addProduct: "Add Product",
    searchProductPlaceholder: "Search by name or category",
    searchProductLabel:"Search",
    sortByLabel:"Sort By",
    addProductForm:"Add Product Form",
    submitLabel:"Submit",
    editProductForm:"Edit Product Form"
  };
}
