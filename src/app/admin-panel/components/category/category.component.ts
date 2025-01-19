import { Component, OnInit } from '@angular/core';
import { ApiAdminService } from 'src/app/services/admin/api-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  categories: any = [];
  addCategoryBtn: any = {};
  searchBtnConfig: any = {};
  sortBtnConfig: any = {};
  paginationConfig:any = {};
  labels: any = {};

   constructor(private api: ApiAdminService, labels: ConstantsService) {
      this.labels = labels.labelMessages;
    }

  ngOnInit(): void {
  }
  
}
