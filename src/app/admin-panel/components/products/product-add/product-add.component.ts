import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { AddItem, Item } from 'src/app/types/add-item';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  categories:any;
  options:any=[];
  errorMessages:any={};
  labels:any={};
  itemFormElements:AddItem={
    submitBtnLabel:"Submit",
    formTitle:"Add Product Form",
    imgRequired:false,
    formElements:[]
};;
  constructor(labels:ConstantsService,errorMessages:ErrormessagesService,public api:ApiService){
    this.labels=labels.labelMessages;
    this.errorMessages=errorMessages.errorMessages;
    this.constructForm();
  }
  ngOnInit(): void {
    this.categories= this.api.getCategories();
    for(const cat of this.categories){
      this.options.push({
        value:cat.categoryId,
        name:cat.categoryName
      })
    }
  }
  constructForm(){
    this.itemFormElements.formTitle=this.labels.addProductForm;
    this.itemFormElements.imgRequired=true;
    this.itemFormElements.submitBtnLabel=this.labels.submitLabel;

    let item:Item={
      id:"-1",
      type:"text",
      label:this.labels.name,
      formControlName:"name",
      placeholder:this.labels.productNamePlaceholder,
      validators:[Validators.required,Validators.minLength(3)],
      errorMessages:[
        {key:'required',value:this.errorMessages.productNameRequired},
        {key:'minlength',value:this.errorMessages.minLength}],
      options:[{value:"",name:""}]
    }
    this.itemFormElements.formElements.push(item);

    item={
      id:"-1",
      type:"textarea",
      label:this.labels.description,
      formControlName:"description",
      placeholder:this.labels.productDescriptionPlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productDescriptionRequired}],
      options:[{value:"",name:""}]
    }
    this.itemFormElements.formElements.push(item);
    
    item={
      id:"-1",
      type:"dropdown",
      label:this.labels.category,
      formControlName:"category",
      placeholder:this.labels.productDescriptionPlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productCategoryRequired}],
      options:this.options
    }
    this.itemFormElements.formElements.push(item);

    item={
      id:"-1",
      type:"number",
      label:this.labels.quantity,
      formControlName:"quantity",
      placeholder:this.labels.productQuantityPlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productQuantityRequired}],
      options:[{value:"",name:""}]
    }
    this.itemFormElements.formElements.push(item);

    item={
      id:"-1",
      type:"number",
      label:this.labels.sellingPrice,
      formControlName:"sellingPrice",
      placeholder:this.labels.productSellingPricePlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productSellingPriceRequired}],
      options:[{value:"",name:""}]
    }
    this.itemFormElements.formElements.push(item);


    item={
      id:"-1",
      type:"number",
      label:this.labels.costPrice,
      formControlName:"costPrice",
      placeholder:this.labels.productCostPricePlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productCostPriceRequired}],
      options:[{value:"",name:""}]
    }
    this.itemFormElements.formElements.push(item);

    item={
      id:"-1",
      type:"image",
      label:this.labels.image,
      formControlName:"img",
      placeholder:this.labels.productDescriptionPlaceholder,
      validators:[Validators.required],
      errorMessages:[{key:"required",value:this.errorMessages.productImageRequired}],
      options:this.options
    }
    this.itemFormElements.formElements.push(item);

  }
}