import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { DialogService } from 'src/app/services/dialog.service';
import { ItemConf, ListItem } from 'src/app/types/list-item';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() item:ListItem={
    id:"1",
    image:"-1",
    title: "Product",
    subtitle: "Category",
    content: "Description",
    contentStrongItem1Label:"Cost Price",
    contentStrongItem1Value:"100",
    contentStrongItem2Label:"Cost Price",
    contentStrongItem2Value:"100",
    buttons:[]
  }; 
  @Input() config:ItemConf={
    imageRequired: true,
    subtitleRequired: true,
    contentRequired: true,
    contentStrongItem1Required: true,
    contentStrongItem2Required: true,
    actionbtnrequired:true
  };

  
  labels: any = {};
  labelsAdmin: any = {};
  CS: any;
  constructor(
    private router: Router,
    labels: ConstantsService,
    labelsAdmin: ConstantsAdminService,
    common: CommonService,
    public dialog: MatDialog,
    public dialogService: DialogService
  ) {
    this.CS = common;
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
  }

  ngOnInit(): void {
    console.log(this.labels);
  }

  editProduct(product: any): void {
    this.CS.product = product;
    this.router.navigate(['/admin-panel/products/edit']);
  }
  deleteProduct(product: any): void {
    this.dialogService
      .confirm(this.labels.deleteProduct, this.labels.deleteDialogMessage)
      .subscribe((res) => {
        if (res) {
          //call the delete api
        }
      });
  }
  buyProduct(arg0: any) {
    console.log("Buying Product");
  }
}