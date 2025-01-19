import { Component, OnInit } from '@angular/core';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';
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
  constructor(private api: ApiAdminService, labels: ConstantsService) {
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
        { value: 'name', name: 'Name' },
        { value: 'category', name: 'Category' },
        { value: 'costPrice', name: 'Price' },
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
        {btnlabel:"Edit",btnColor:"primary"},
        {btnlabel:"Delete",btnColor:"warn"},
        {btnlabel:"Buy",btnColor:"primary"}
      ],
    }));
  }
}
