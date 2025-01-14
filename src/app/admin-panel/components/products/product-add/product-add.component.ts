import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  productForm : FormGroup;
  categories:any;
  labels:any={};
  isSubmitted:boolean=false;
  errorMessages:any={};
  constructor(fb:FormBuilder,labels:ConstantsService,errorNessages:ErrormessagesService,public api:ApiService){
    this.labels=labels.labelMessages;
    this.errorMessages=errorNessages.errorMessages;
    this.productForm = fb.group({
      name : ['',[Validators.required]],
      description : ['', Validators.required],
      category : ['', Validators.required],
      quantity : ['',Validators.required],
      sellingPrice : ['',Validators.required],
      costPrice : ['',Validators.required],
      image: ['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.categories= this.api.getCategories();
  }

  onSubmit(){
    this.isSubmitted=true;
    console.log(this.productForm);
    if(!this.productForm.valid){
      console.log(this.productForm.get('name'));
      return;
    }
  }

  getNameErrorMessage(){
    if(this.productForm.get('name')?.hasError("required")){
      return this.errorMessages.productNameRequired;
    }else if(this.productForm.get('name')?.hasError("minlength")){
      return "Min 3 length";
    }
  }
  getCategoryErrorMessage(){
    if(this.productForm.get('category')?.hasError("required")){
      return this.errorMessages.productCategoryRequired;
    }
  }

  getDescriptionErrorMessage(){
    if(this.productForm.get('description')?.hasError("required")){
      return this.errorMessages.productDescriptionRequired;
    }
  }

  getQuantityErrorMessage(){
    if(this.productForm.get('quantity')?.hasError("required")){
      return this.errorMessages.productQuanityRequired;
    }
  }

  getSellingPriceErrorMessage(){
    if(this.productForm.get('sellingPrice')?.hasError("required")){
      return this.errorMessages.productSellingPriceRequired;
    }
  }

  getCostPriceErrorMessage(){
    if(this.productForm.get('costPrice')?.hasError("required")){
      return this.errorMessages.productCostPriceRequired;
    }
  }

  getImageErrorMessage(){
    if(this.productForm.get('image')?.hasError("required")){
      return this.errorMessages.productImageRequired;
    }
  }


}