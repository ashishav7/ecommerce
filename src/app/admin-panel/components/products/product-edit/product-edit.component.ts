import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit{
  common:any;
  constructor(common:CommonService){
    this.common=common;
  }

  ngOnInit(): void {
    console.log(this.common.product);
  }
}
