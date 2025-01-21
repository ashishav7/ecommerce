import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { AddItem } from 'src/app/types/add-item';
import { ProductFormControlI } from 'src/app/form-group-controls/product';
import { ItemFormElementBuilder } from 'src/app/helper/form-add-helper';
import { ValidatorI } from 'src/app/services/validator.service';

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
    resetBtnLabel: 'Reset',
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
        value: cat.code,
        name: cat.name,
      });
    }
  }

  constructForm() {
    this.itemFormElements.formTitle = this.labels.addProductForm;
    this.itemFormElements.imgRequired = true;
    this.itemFormElements.submitBtnLabel = this.labels.submitLabel;

    let itemElement = new ItemFormElementBuilder()
      .setType('text')
      .setFormControlName(ProductFormControlI.productName)
      .setLabel(this.labels.name)
      .setValidators([Validators.required, Validators.minLength(3)])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productNameRequired,
        },
        { key: ValidatorI.minlength, value: this.errorMessages.minLength },
      ])
      .setPlaceholder(this.labels.productNamePlaceholder)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('textarea')
      .setFormControlName(ProductFormControlI.productDescription)
      .setLabel(this.labels.description)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productDescriptionRequired,
        },
      ])
      .setPlaceholder(this.labels.productDescriptionPlaceholder)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('dropdown')
      .setFormControlName(ProductFormControlI.productCategory)
      .setLabel(this.labels.category)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productCategoryRequired,
        },
      ])
      .setOptions(this.options)
      .build();
    this.itemFormElements.formElements.push(itemElement);


    itemElement = new ItemFormElementBuilder()
    .setType('subdropdown')
    .setFormControlName(ProductFormControlI.productSubCategory)
    .setLabel(this.labels.subCategory)
    .setSubOptions({
      parentControlName:ProductFormControlI.productCategory,
      options:[
        {
          value:'ZELEC1',
          name:'ZElectronic SubCat1'
          ,parentCode:'Code'
        },
        {
          value:'ZELEC2',
          name:'ZElectronic SubCat2'
          ,parentCode:'Code'
        },
        {
          value:'ELEC1',
          name:'SubCat1'
          ,parentCode:'Code2'
        },
        {
          value:'ELEC2',
          name:'SubCat2'
          ,parentCode:'Code2'
        }
      ]
    })
    .build();
  this.itemFormElements.formElements.push(itemElement);


    itemElement = new ItemFormElementBuilder()
      .setType('number')
      .setFormControlName(ProductFormControlI.productQuantity)
      .setLabel(this.labels.quantity)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productQuantityRequired,
        },
      ])
      .setPlaceholder(this.labels.productQuantityPlaceholder)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('number')
      .setFormControlName(ProductFormControlI.productSellingPrice)
      .setLabel(this.labels.sellingPrice)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productSellingPriceRequired,
        },
      ])
      .setPlaceholder(this.labels.productSellingPricePlaceholder)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('number')
      .setFormControlName(ProductFormControlI.productCostPrice)
      .setLabel(this.labels.costPrice)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.productCostPriceRequired,
        },
      ])
      .setPlaceholder(this.labels.productCostPricePlaceholder)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('image')
      .setFormControlName(ProductFormControlI.productImage)
      .setLabel(this.labels.image)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.ProductFormControlImageRequired,
        },
      ])
      .build();
    this.itemFormElements.formElements.push(itemElement);
  }
  addProduct(addProductForm: FormGroup<any>) {
    console.log('Add Product Form ', addProductForm);
  }
}
