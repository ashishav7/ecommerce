import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { AddItem, Item } from 'src/app/types/add-item';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
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
  constructor(
    labels: ConstantsService,
    errorMessages: ErrormessagesService,
    public api: ApiService
  ) {
    this.labels = labels.labelMessages;
    this.errorMessages = errorMessages.errorMessages;
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
      [{ value: '', name: '' }]
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
      [{ value: '', name: '' }]
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
      this.options
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
      [{ value: '', name: '' }]
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
      [{ value: '', name: '' }]
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
      [{ value: '', name: '' }]
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
      [{ value: '', name: '' }]
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
  options: { value: string; name: string }[]
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
    initialValue:''
  };
  component.itemFormElements.formElements.push(item);
}
