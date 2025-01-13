import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  productForm : FormGroup;
  floatLabel : any = 'auto';
  categories:any;
  labels:any={};
  constructor(fb:FormBuilder,labels:ConstantsService){
    this.labels=labels.labelMessages;
    this.productForm = fb.group({
      name : ['',Validators.required],
      description : ['', Validators.required],
      category : ['', Validators.required],
      quantity : ['',Validators.required],
      sellingPrice : ['',Validators.required],
      costPrice : ['',Validators.required],
      image: ['',Validators.required]
    });
  }
  ngOnInit(): void {
    this.categories=[{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    },{
      categoryId:1,categoryName:'Electronics' 
    }];
  }
}