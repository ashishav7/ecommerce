import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CategoryFormControlI } from 'src/app/form-group-controls/category';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { ValidatorI } from 'src/app/services/validator.service';
import { AddItem, Item } from 'src/app/types/add-item';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
})
export class CategoryEditComponent {
  errorMessages: any = {};
  labels: any = {};
  itemFormElements: AddItem = {
    submitBtnLabel: 'Submit',
    formTitle: 'Add Category Form',
    imgRequired: true,
    formElements: [],
    resetBtnLabel: 'Reset',
  };

  category: Category = {
    code: '',
    name: '',
    image: '',
    slug: '',
    description: '',
  };
  constructor(
    labels: ConstantsService,
    errorMessages: ErrormessagesService,
    public api: ApiService,
    public CS: CommonService
  ) {
    this.labels = labels.labelMessages;
    this.errorMessages = errorMessages.errorMessages;
    this.category = this.CS.category;
    this.constructForm();
  }

  modifyCategory(addCategoryForm: FormGroup<any>) {
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
      [{ value: '', name: '' }],
      this.category.name
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
      [{ value: '', name: '' }],
      this.category.slug
    );

    this.addToItemFormElementsArray(
      '-1',
      'textarea',
      this.labels.categoryDescription,
      CategoryFormControlI.categoryDescription,
      this.labels.categoryDescriptionPlaceholder,
      [],
      [],
      [],
      this.category.description
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
      [{ value: '', name: '' }],
      this.category.image
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
    options: { value: string; name: string }[],
    initialValue: string
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
      initialValue: initialValue,
    };
    this.itemFormElements.formElements.push(item);
  }
}
