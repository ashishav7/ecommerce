import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  common: any;
  productForm: FormGroup;
  api:any;
  categories: any;
  labels: any = {};
  isSubmitted: boolean = false;
  errorMessages: any = {};
  product:any={};
  constructor(
    fb: FormBuilder,
    labels: ConstantsService,
    errorNessages: ErrormessagesService,
    api:ApiService,
    common:CommonService
  ) {
    this.api=api;
    this.common=common;
    this.labels = labels.labelMessages;
    this.errorMessages = errorNessages.errorMessages;
    this.product=this.common.product;
    console.log(this.product);
    this.productForm = fb.group({
      name: [this.product.name, [Validators.required]],
      description: [this.product.description, Validators.required],
      category: [this.product.category, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      sellingPrice: [this.product.sellingPrice, Validators.required],
      costPrice: [this.product.costPrice, Validators.required],
      image: [this.product.image, Validators.required],
    });
  }
  ngOnInit(): void {
    this.categories = this.api.getCategories();
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.productForm);
    if (!this.productForm.valid) {
      console.log(this.productForm.get('name'));
      return;
    }
  }

  getNameErrorMessage() {
    if (this.productForm.get('name')?.hasError('required')) {
      return this.errorMessages.productNameRequired;
    } else if (this.productForm.get('name')?.hasError('minlength')) {
      return 'Min 3 length';
    }
  }
  getCategoryErrorMessage() {
    if (this.productForm.get('category')?.hasError('required')) {
      return this.errorMessages.productCategoryRequired;
    }
  }

  getDescriptionErrorMessage() {
    if (this.productForm.get('description')?.hasError('required')) {
      return this.errorMessages.productDescriptionRequired;
    }
  }

  getQuantityErrorMessage() {
    if (this.productForm.get('quantity')?.hasError('required')) {
      return this.errorMessages.productQuanityRequired;
    }
  }

  getSellingPriceErrorMessage() {
    if (this.productForm.get('sellingPrice')?.hasError('required')) {
      return this.errorMessages.productSellingPriceRequired;
    }
  }

  getCostPriceErrorMessage() {
    if (this.productForm.get('costPrice')?.hasError('required')) {
      return this.errorMessages.productCostPriceRequired;
    }
  }

  getImageErrorMessage() {
    if (this.productForm.get('image')?.hasError('required')) {
      return this.errorMessages.productImageRequired;
    }
  }
}
