import { ValidatorFn, Validators } from "@angular/forms";

export interface Item{
    id:string;
    type: string;
    label: string;
    formControlName: string,
    placeholder: string;
    errorMessages:{key:string,value:string}[];
    validators:ValidatorFn[];
    options:{value:string,name:string}[];
    initialValue:string;
}

export type ItemArray = Item[];

export interface AddItem {
  submitBtnLabel:string;
  formTitle:string;
  imgRequired:boolean;
  formElements: ItemArray;
}
