import { ValidatorFn } from "@angular/forms";

export interface Item{
    id:string;
    type: string;
    label: string;
    formControlName: string,
    placeholder: string;
    errorMessages:{key:string,value:string}[];
    validators:ValidatorFn[];
    options:{value:string,name:string}[];
    subOptions:SubOption,
    initialValue:string;
}

export type SubOption = {
  parentControlName: string;
  options: { value: string; name: string; parentCode:string }[];
};

export type ItemArray = Item[];

export interface AddItem {
  submitBtnLabel:string;
  resetBtnLabel:string;
  formTitle:string;
  imgRequired:boolean;
  formElements: ItemArray;
}
