import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CategoryFormControlI } from 'src/app/form-group-controls/category';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { ValidatorI } from 'src/app/services/validator.service';
import { AddItem, Item } from 'src/app/types/add-item';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss'],
})
export class CategoryAddComponent {
  errorMessages: any = {};
  labels: any = {};
  itemFormElements: AddItem = {
    submitBtnLabel: 'Submit',
    formTitle: 'Add Category Form',
    imgRequired: true,
    formElements: [],
    resetBtnLabel: 'Reset',
  };
  constructor(
    labels: ConstantsService,
    errorMessages: ErrormessagesService,
    public api: ApiService
  ) {
    this.labels = labels.labelMessages;
    this.errorMessages = errorMessages.errorMessages;
    this.constructForm();
  }
  addCategory(addCategoryForm: FormGroup<any>) {
    console.log(addCategoryForm);
  }

  constructForm() {

    this.addToItemFormElementsArray(
      '-1',
      'text',
      this.labels.categoryName,
      CategoryFormControlI.categoryName,
      this.labels.categoryNamePlaceholder,
      [Validators.required],
      [
        {
          key: ValidatorI.required,
          value: this.errorMessages.categoryNameRequired,
        },
      ],
      [{ value: '', name: '' }]
    );

    this.addToItemFormElementsArray(
      '-1',
      'text',
      this.labels.slugLabel,
      CategoryFormControlI.categorySlug,
      this.labels.slugPlaceholder,
      [Validators.required],
      [
        {
          key: ValidatorI.required,
          value: this.errorMessages.categorySlugRequired,
        },
      ],
      [{ value: '', name: '' }]
    );

    this.addToItemFormElementsArray(
      '-1',
      'textarea',
      this.labels.categoryDescription,
      CategoryFormControlI.categoryDescription,
      this.labels.categoryDescriptionPlaceholder,
      [],
      [],
      []
    );

    this.addToItemFormElementsArray(
          '-1',
          'image',
          this.labels.categoryImage,
          CategoryFormControlI.categoryImage,
          this.labels.productDescriptionPlaceholder,
          [Validators.required],
          [
            {
              key: ValidatorI.required,
              value: this.errorMessages.categoryImageRequired,
            },
          ],
          [{ value: '', name: '' }]
        );


  }
  addToItemFormElementsArray(
    id: string,
    type: string,
    label: string,
    formControlName: string,
    placeholder: string,
    validators: ((
      control: import('@angular/forms').AbstractControl
    ) => import('@angular/forms').ValidationErrors | null)[],
    errorMessages: { key: string; value: string }[],
    options: { value: string; name: string }[]
  ) {
    let item: Item = {
      id: id,
      type: type,
      label: label,
      formControlName: formControlName,
      placeholder: placeholder,
      validators: validators,
      errorMessages: errorMessages,
      options: options,
      initialValue: '',
    };
    this.itemFormElements.formElements.push(item);
  }
}
