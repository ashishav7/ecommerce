import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorI {
  static minlength:string="minlength";
  static required: string="required";
  constructor() { }
}
