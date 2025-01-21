import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { AddItem, Item, SubOption } from 'src/app/types/add-item';

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
    formElements:[],
    resetBtnLabel: 'Reset'
  };

  @Output() actionDone = new EventEmitter<FormGroup>();
  public subDrowdown:Map<string, {value:string,name:string}[]> = new Map(); 
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
        if(element.type === 'subdropdown'){
          this.subDrowdown.set(element.subOptions.parentControlName,element.subOptions.options);
        }
        this.addDynamicControl(element);
    });
  }
  addDynamicControl(element:Item){
    const control = new FormControl(element.initialValue,element.validators);
    this.itemForm.addControl(element.formControlName,control);
  }
  onSubmit(){
    this.isSubmitted=true;
    if(this.itemForm.valid){
      this.actionDone.emit(this.itemForm);
    }
  }
  onReset() {
    this.itemForm.reset();
  }
}
