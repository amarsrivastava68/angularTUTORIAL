import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

    userForm !: FormGroup;

  // this constructor is called to create the object of the class FormBuilder
  constructor(private formBuilder: FormBuilder) {
  
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
      }) ,
      phoneNumbers : this.formBuilder.array([
        this.formBuilder.control('',[
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ])
      ])
      
    });
  }

  getPhoneNumbers() {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  addPhoneNumber(){
    this.getPhoneNumbers().push(
      this.formBuilder.control('',[
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ])
    );
  }
  removePhoneNumber(index: number){
    this.getPhoneNumbers().removeAt(index);
  }
  submitForm() {
    if (this.userForm.valid) {
      console.log( this.userForm.value);
    } else {
      console.log("Form is invalid");
    }
  } 
  

}
