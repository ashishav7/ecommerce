import { Component, Input, OnInit } from '@angular/core';
import { ConstantsAdminService } from 'src/app/services/admin/constants-admin.service';
import { ConstantsService } from 'src/app/services/constants.service';
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
    labels: ConstantsService,
    labelsAdmin: ConstantsAdminService,
  ) {
    this.labels = labels.labelMessages;
    this.labelsAdmin = labelsAdmin.labelMessages;
  }

  ngOnInit(): void {
    console.log(this.labels);
  }
}