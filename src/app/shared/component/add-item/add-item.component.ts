import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { AddItem, Item, SubOption } from 'src/app/types/add-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() itemFormElements:AddItem={
    submitBtnLabel:"Submit",
    formTitle:"Add Product Form",
    imgRequired:false,
    formElements:[],
    resetBtnLabel: 'Reset'
  };

  @Output() actionDone = new EventEmitter<FormGroup>();
  public subDrowdown:Map<string, {value:string; name:string; parentCode:string}[]> = new Map(); 
  public subDrowdown2:Map<string, {value:string; name:string; parentCode:string}[] | undefined> = new Map(); 
  
  itemForm: FormGroup;
  labels: any = {};
  isSubmitted: boolean = false;
  imagePreview: any;
  constructor(
    fb: FormBuilder,
    labels: ConstantsService,
    public api: ApiService
  ) {
    this.labels = labels.labelMessages;
    this.itemForm = fb.group({});
  }
  ngOnInit(): void {
    this.itemFormElements.formElements.forEach((element)=>{
        if(element.type === 'subdropdown'){
          this.subDrowdown.set(element.subOptions.parentControlName,element.subOptions.options);
        }
        this.addDynamicControl(element);
    });
  }
  addDynamicControl(element:Item){
    const control = new FormControl(element.initialValue,element.validators);
    this.itemForm.addControl(element.formControlName,control);
  }
  onSubmit(){
    this.isSubmitted=true;
    if(this.itemForm.valid){
      this.actionDone.emit(this.itemForm);
    }
  }
  onReset() {
    this.itemForm.reset();
    this.imagePreview = null;
  }

  selectSubdropdowns(parentFormControl :string) {
    let parentCode = '';
    if(this.itemForm.get(parentFormControl)!=null || this.itemForm.get(parentFormControl)!=undefined){
      parentCode = this.itemForm.get(parentFormControl)?.value;
    }
    this.subDrowdown2.set(parentFormControl,this.subDrowdown.get(parentFormControl)?.filter(opt => opt.parentCode == parentCode));
  }


  onImageSelected(event: Event,controlName:string): void {
    const fileInput = event.target as HTMLInputElement;

    // Check if the user has selected a file
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      // Validate that the selected file is an image
      if (file.type.startsWith('image/')) {
        // Preview the image
        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        // If the file is not an image, reset the form control
        this.itemForm.get(controlName)?.reset();
        this.imagePreview = null;
        alert('Please select a valid image file.');
      }
    }
  }
    

}
