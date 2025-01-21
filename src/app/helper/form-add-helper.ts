import { AddItem, Item, SubOption } from '../types/add-item';

export class ItemFormElementBuilder {
  private item: Item;
  constructor() {
    this.item = {
      id: '-1',
      type: 'text',
      label: '',
      formControlName: '',
      placeholder: '',
      validators: [],
      errorMessages: [],
      options: [],
      subOptions: {
        parentControlName: '',
        options: [],
      },
      initialValue: '',
    };
  }

  setId(id: string): this {
    this.item.id = id;
    return this;
  }

  setType(type: string): this {
    this.item.type = type;
    return this;
  }

  setLabel(label: string): this {
    this.item.label = label;
    return this;
  }

  setFormControlName(formControlName: string): this {
    this.item.formControlName = formControlName;
    return this;
  }

  setPlaceholder(placeholder: string): this {
    this.item.placeholder = placeholder;
    return this;
  }

  setValidators(validators: ((
    control: import('@angular/forms').AbstractControl
  ) => import('@angular/forms').ValidationErrors | null)[]):this{
    this.item.validators=validators;
    return this;
  }

  setSubOptions(subOptions:SubOption):this{
    this.item.subOptions = subOptions; 
    return this;
  }

  setErrorMessages(errorMessages: { key: string; value: string }[]): this {
    this.item.errorMessages = errorMessages;
    return this;
  }

  setOptions(options: { value: string; name: string }[]): this {
    this.item.options = options;
    return this;
  }

  setInitialValue(initialValue: string): this {
    this.item.initialValue = initialValue;
    return this;
  }

  build(): Item {
    return this.item;
  }

}
