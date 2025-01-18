import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { TooltipPosition } from '@angular/material/tooltip';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-item-listing',
  templateUrl: './item-listing.component.html',
  styleUrls: ['./item-listing.component.scss']
})
export class ItemListingComponent implements OnInit{
  @Input() list:any=[];
  @Input() paginationConfig:{required:boolean,pagesize:number,pageSizeOptions:number[]}={
    required:true,
    pagesize:5,
    pageSizeOptions: [5, 10, 20]
  };
  @Input() addBtnConfig:{view:boolean,tooltip:string,routingLink:string,tooltipPosition:TooltipPosition}={
    view:true,
    tooltip:"",
    routingLink:"",
    tooltipPosition:"above"
  };
  @Input() searchBtnConfig:{label:string,placeholder:string}={
    label:"",
    placeholder:""
  };
  @Input() sortBtnConfig:{required:boolean,label:string,options:[{value:string,name:string}]}={
    required:false,
      label:"",
      options:[
        {value:"name",name:"Name"},
      ]
  }


  labels: any = {};
  labelsAdmin: any = {};
  CS: any;
  searchQuery: string = '';
  sortOption: string = '';
  filteredItems: any[] = [];
  pageSize: number = 10;
  currentPage: number = 0;
  paginatedItems: any[] = [];
  
constructor(
    labels: ConstantsService,
    labelsAdmin: ConstantsAdminService,
    common: CommonService
  ) {
    this.CS = common;
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
  }

  ngOnInit(): void {
    this.filteredItems = [...this.list];
    this.updatePaginatedItems();
  }
  applyFilter() {
      this.filteredItems = this.list.filter((item:any) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      this.updatePaginatedItems();
    }
    applySort() {
      this.filteredItems.sort((a, b) => {
        const valueA = a[this.sortOption];
        const valueB = b[this.sortOption];
  
        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return valueA.localeCompare(valueB); // String comparison
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
          return valueA - valueB; // Numeric comparison
        }
        return 0;
      });
      this.updatePaginatedItems();
    }
  
    handlePageEvent(event: PageEvent) {
      this.pageSize = event.pageSize;
      this.currentPage = event.pageIndex;
      this.updatePaginatedItems();
    }
  
    updatePaginatedItems() {
      const startIndex = this.currentPage * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.paginatedItems = this.filteredItems.slice(startIndex, endIndex);
    }
  
}
