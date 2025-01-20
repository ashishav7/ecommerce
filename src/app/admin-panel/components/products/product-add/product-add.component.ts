import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { AddItem, Item } from 'src/app/types/add-item';
import { ValidatorI } from 'src/app/services/validator.service';
import { ProductFormControlI } from 'src/app/form-group-controls/product';

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
    resetBtnLabel : 'Reset'
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
      ProductFormControlI.productName,
      this.labels.productNamePlaceholder,
      [Validators.required, Validators.minLength(3)],
      [
        { key: ValidatorI.required, value: this.errorMessages.productNameRequired },
        { key: ValidatorI.minlength, value: this.errorMessages.minLength },
      ],
      [{ value: '', name: '' }]
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'textarea',
      this.labels.description,
      ProductFormControlI.productDescription,
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [
        {
          key: ValidatorI.required,
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
      ProductFormControlI.productCategory,
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [{ key: ValidatorI.required, value: this.errorMessages.productCategoryRequired }],
      this.options
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'number',
      this.labels.quantity,
      ProductFormControlI.productQuantity,
      this.labels.productQuantityPlaceholder,
      [Validators.required],
      [{ key: ValidatorI.required, value: this.errorMessages.productQuantityRequired }],
      [{ value: '', name: '' }]
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'number',
      this.labels.sellingPrice,
      ProductFormControlI.productSellingPrice,
      this.labels.productSellingPricePlaceholder,
      [Validators.required],
      [
        {
          key: ValidatorI.required,
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
      ProductFormControlI.productCostPrice,
      this.labels.productCostPricePlaceholder,
      [Validators.required],
      [{ key: ValidatorI.required, value: this.errorMessages.productCostPriceRequired }],
      [{ value: '', name: '' }]
    );

    addToItemFormElementsArray(
      component,
      '-1',
      'image',
      this.labels.image,
      ProductFormControlI.productImage,
      this.labels.productDescriptionPlaceholder,
      [Validators.required],
      [{ key: ValidatorI.required, value: this.errorMessages.ProductFormControlImageRequired }],
      [{ value: '', name: '' }]
    );
  }

  addProduct(addProductForm: FormGroup<any>) {
    console.log("Add Product Form ", addProductForm);
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
