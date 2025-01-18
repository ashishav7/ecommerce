import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { AddItem, Item } from 'src/app/types/add-item';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  categories: any;
    options: any = [];
    errorMessages: any = {};
    labels: any = {};
    component: any;
    itemFormElements: AddItem = {
      submitBtnLabel: 'Submit',
      formTitle: 'Add Product Form',
      imgRequired: false,
      formElements: [],
    };
  product:any={};
  constructor(
    fb: FormBuilder,
    labels: ConstantsService,
    errorNessages: ErrormessagesService,
    public api:ApiService,
    public common:CommonService
  ) {
    this.labels = labels.labelMessages;
    this.errorMessages = errorNessages.errorMessages;
    this.product=this.common.product;
    console.log(this.product);
    this.constructForm();
  }
  ngOnInit(): void {
    this.categories = this.api.getCategories();
    for (const cat of this.categories) {
      this.options.push({
        value: cat.categoryId,
        name: cat.categoryName,
      });
    }
  }
  constructForm() {
    this.itemFormElements.formTitle = this.labels.addProductForm;
    this.itemFormElements.imgRequired = true;
    this.itemFormElements.submitBtnLabel = this.labels.submitLabel;
    let component = this;
    addToItemFormElementsArray(
      component,
      '-1',
      'text',
      this.labels.name,
      'name',
      this.labels.productNamePlaceholder,
      [Validators.required, Validators.minLength(3)],
      [
        { key: 'required', value: this.errorMessages.productNameRequired },
        { key: 'minlength', value: this.errorMessages.minLength },
      ],
      [{ value: '', name: '' }],
      this.product.name
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'textarea',
      this.labels.description,
      'description',
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [
        {
          key: 'required',
          value: this.errorMessages.productDescriptionRequired,
        },
      ],
      [{ value: '', name: '' }],
      this.product.description
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'dropdown',
      this.labels.category,
      'category',
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [{ key: 'required', value: this.errorMessages.productCategoryRequired }],
      this.options,
      this.product.category
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'number',
      this.labels.quantity,
      'quantity',
      this.labels.productQuantityPlaceholder,
      [Validators.required],
      [{ key: 'required', value: this.errorMessages.productQuantityRequired }],
      [{ value: '', name: '' }],
      this.product.quantity
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'number',
      this.labels.sellingPrice,
      'sellingPrice',
      this.labels.productSellingPricePlaceholder,
      [Validators.required],
      [
        {
          key: 'required',
          value: this.errorMessages.productSellingPriceRequired,
        },
      ],
      [{ value: '', name: '' }],
      this.product.sellingPrice
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'number',
      this.labels.costPrice,
      'costPrice',
      this.labels.productCostPricePlaceholder,
      [Validators.required],
      [{ key: 'required', value: this.errorMessages.productCostPriceRequired }],
      [{ value: '', name: '' }],
      this.product.costPrice
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'image',
      this.labels.image,
      'image',
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [{ key: 'required', value: this.errorMessages.productImageRequired }],
      [{ value: '', name: '' }],
      this.product.image
    );
  }

}

function addToItemFormElementsArray(
  component: any,
  id: string,
  type: string,
  label: string,
  formControlName: string,
  placeholder: string,
  validators: ((
    control: import('@angular/forms').AbstractControl
  ) => import('@angular/forms').ValidationErrors | null)[],
  errorMessages: { key: string; value: string }[],
  options: { value: string; name: string }[],
  initialValue:string
) {
  let item: Item = {
    id: id,
    type: type,
    label: label,
    formControlName: formControlName,
    placeholder: placeholder,
    validators: validators,
    errorMessages: errorMessages,
    options: options,
    initialValue:initialValue
  };
  component.itemFormElements.formElements.push(item);
}