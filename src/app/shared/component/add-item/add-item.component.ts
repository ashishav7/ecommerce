import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { AddItem, Item } from 'src/app/types/add-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() itemFormElements:AddItem={
    submitBtnLabel:"Submit",
    formTitle:"Add Product Form",
    imgRequired:false,
    formElements:[]
};
  
  itemForm: FormGroup;
  labels: any = {};
  isSubmitted: boolean = false;
  constructor(
    fb: FormBuilder,
    labels: ConstantsService,
    public api: ApiService
  ) {
    this.labels = labels.labelMessages;
    this.itemForm = fb.group({});
  }
  ngOnInit(): void {
    this.itemFormElements.formElements.forEach((element)=>{
        this.addDynamicControl(element);
    });
  }
  addDynamicControl(element:Item){
    const control = new FormControl('',element.validators);
    this.itemForm.addControl(element.formControlName,control);
  }
  onSubmit(){
    this.isSubmitted=true;
  }
}
