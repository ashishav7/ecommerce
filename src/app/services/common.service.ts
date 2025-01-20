import { Injectable } from '@angular/core';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  product :any={};
  category : Category = {
    code: '',
    name: '',
    image: '',
    slug: '',
    description: ''
  };
  constructor() { }

  
}
