import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  labels:any={}
  categories:any={};
  constructor(public label:ConstantsService,private api:ApiService){
    this.labels=label.labelMessages;
  }

  ngOnInit(): void {
    this.categories=this.api.getCategories();
  }
}
