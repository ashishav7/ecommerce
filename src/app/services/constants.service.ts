import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }
  readonly labelMessages={
    appName : "E-Commerce",
    clientSideName : "E-Commerce Client Side"
  };
}
