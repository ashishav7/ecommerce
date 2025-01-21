import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CategoryFormControlI } from 'src/app/form-group-controls/category';
import {
  ItemFormElementBuilder,
} from 'src/app/helper/form-add-helper';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { ValidatorI } from 'src/app/services/validator.service';
import { AddItem } from 'src/app/types/add-item';
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
    formTitle: 'Edit Category Form',
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
    let itemElement = new ItemFormElementBuilder()
      .setType('text')
      .setFormControlName(CategoryFormControlI.categoryName)
      .setLabel(this.labels.categoryName)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.categoryNameRequired,
        },
      ])
      .setPlaceholder(this.labels.categoryNamePlaceholder)
      .setInitialValue(this.category.name)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('text')
      .setFormControlName(CategoryFormControlI.categorySlug)
      .setLabel(this.labels.slugLabel)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.categorySlugRequired,
        },
      ])
      .setPlaceholder(this.labels.slugPlaceholder)
      .setInitialValue(this.category.slug)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('textarea')
      .setFormControlName(CategoryFormControlI.categoryDescription)
      .setLabel(this.labels.categoryDescription)
      .setPlaceholder(this.labels.categoryDescriptionPlaceholder)
      .setInitialValue(this.category.description)
      .build();
    this.itemFormElements.formElements.push(itemElement);

    itemElement = new ItemFormElementBuilder()
      .setType('image')
      .setFormControlName(CategoryFormControlI.categoryImage)
      .setLabel(this.labels.categoryImage)
      .setValidators([Validators.required])
      .setErrorMessages([
        {
          key: ValidatorI.required,
          value: this.errorMessages.categoryImageRequired,
        },
      ])
      .setInitialValue(this.category.image)
      .build();
    this.itemFormElements.formElements.push(itemElement);
  }
}
