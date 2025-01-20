import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { Category } from 'src/app/types/category';
import { ItemConf, ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  items: ListItem[] = [];
  itemConf:ItemConf={
    imageRequired: true,
    subtitleRequired: true,
    contentRequired: true,
    contentStrongItem1Required: false,
    contentStrongItem2Required: false,
    actionbtnrequired:true
  }
  addCategoryBtn: any = {};
  searchBtnConfig: any = {};
  sortBtnConfig: any = {};
  paginationConfig: any = {};
  labels: any = {};

  constructor(
    private api: ApiService,
    labels: ConstantsService,
    public CS : CommonService,
    public router : Router
  ) {
    this.labels = labels.labelMessages;
  }

  ngOnInit(): void {
    this.setConfigBtns();
    this.categories=this.api.getCategories();
    this.items = this.categories.map((category:Category)=>({
        id: category.code,
        image: category.image,
        title: category.name,
        subtitle: category.slug,
        content: category.description,
        contentStrongItem1Label: '',
        contentStrongItem1Value: '',
        contentStrongItem2Label: '',
        contentStrongItem2Value: '',
          
        buttons:[
          {btnlabel:"Edit",btnColor:"primary",btnAction:() => this.editFunction(category)},
          {btnlabel:"Delete",btnColor:"warn",btnAction:() => this.deleteFunction(category)}
        ]
    }));

  }
  deleteFunction(category: Category): any {
    console.log("Delete Category");
  }
  editFunction(category: Category): any {
    this.CS.category=category;
    this.router.navigate(['/admin-panel/category/edit']);
  }
  setConfigBtns() {
    this.addCategoryBtn = {
      view: true,
      tooltip: this.labels.addCategory,
      routingLink: '/admin-panel/category/add',
      tooltipPosition: 'above',
    };

    this.searchBtnConfig = {
      label: this.labels.searchProductLabel,
      placeholder: this.labels.searchProductPlaceholder,
    };

    this.sortBtnConfig = {
      required: true,
      label: this.labels.sortByLabel,
      options: [{ value: 'title', name: 'Name' }],
    };
    this.paginationConfig = {
      required: true,
      pagesize: 10,
      pageSizeOptions: [5, 10, 20],
    };
  }
}
