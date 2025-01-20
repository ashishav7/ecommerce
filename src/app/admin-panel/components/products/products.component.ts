import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ItemConf, ListItem } from 'src/app/types/list-item';
import {Product} from 'src/app/types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  items:ListItem[]=[];
  addProductBtn: any = {};
  searchBtnConfig: any = {};
  sortBtnConfig: any = {};
  paginationConfig: any = {};
  itemConf: ItemConf;
  labels: any = {};
  constructor(
      private api: ApiAdminService,
      labels: ConstantsService,
      public CS: CommonService,
      public router:Router,
      public dialogService: DialogService
    ) {
    this.labels = labels.labelMessages;
    this.itemConf = {
      imageRequired: true,
      subtitleRequired: true,
      contentRequired: true,
      contentStrongItem1Required: true,
      contentStrongItem2Required: true,
      actionbtnrequired:true
    };
  }

  ngOnInit(): void {
    this.addProductBtn = {
      view: true,
      tooltip: this.labels.addProduct,
      routingLink: '/admin-panel/products/add',
      tooltipPosition: 'above',
    };

    this.searchBtnConfig = {
      label: this.labels.searchProductLabel,
      placeholder: this.labels.searchProductPlaceholder,
    };

    this.sortBtnConfig = {
      required: true,
      label: this.labels.sortByLabel,
      options: [
        { value: 'title', name: 'Name' },
        { value: 'contentStrongItem1Value', name: 'Price'},
      ],
    };
    this.paginationConfig = {
      required: true,
      pagesize: 10,
      pageSizeOptions: [5, 10, 20],
    };

    this.api.getProducts().subscribe((data) => {
      this.products = data;
    });

    this.items = this.products.map((product:Product) =>({
      id : product.id,
      image:product.image,
      title:product.name,
      subtitle:product.category,
      content:product.description,
      contentStrongItem1Label:this.labels.costPrice,
      contentStrongItem1Value:product.costPrice.toString(),
      contentStrongItem2Label:this.labels.sellingPrice,
      contentStrongItem2Value:product.sellingPrice.toString(),
     
      buttons:[
        {btnlabel:"Edit",btnColor:"primary",btnAction:() => this.editFunction(product)},
        {btnlabel:"Delete",btnColor:"warn",btnAction:() => this.deleteFunction(product)},
        {btnlabel:"Buy",btnColor:"primary",btnAction:() => this.buyFunction(product)}
      ]
    }));
  }
  editFunction(product:Product){
    this.CS.product = product;
    this.router.navigate(['/admin-panel/products/edit']);
  }

  deleteFunction(product: any): void {
    this.dialogService
      .confirm(this.labels.deleteProduct, this.labels.deleteDialogMessage)
      .subscribe((res) => {
        if (res) {
          //call the delete api
          console.log(res);
        }
        console.log("Outside " , res);
      });
  }

  buyFunction(product:Product){
    console.log("Buy Clicked");
  }

}
