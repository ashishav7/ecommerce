import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { CategoryFormControlI } from 'src/app/form-group-controls/category';
import { ItemFormElementBuilder } from 'src/app/helper/form-add-helper';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { ErrormessagesService } from 'src/app/services/errormessages.service';
import { ValidatorI } from 'src/app/services/validator.service';
import { AddItem } from 'src/app/types/add-item';

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
        .build();
      this.itemFormElements.formElements.push(itemElement);
  
      itemElement = new ItemFormElementBuilder()
        .setType('textarea')
        .setFormControlName(CategoryFormControlI.categoryDescription)
        .setLabel(this.labels.categoryDescription)
        .setPlaceholder(this.labels.categoryDescriptionPlaceholder)
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
        .build();
      this.itemFormElements.formElements.push(itemElement);
    }
}
