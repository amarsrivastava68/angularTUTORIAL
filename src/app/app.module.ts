import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { Student2Module } from './student2/student2.module';
import { EncapDemoComponent } from './encapsulation-component/encapsulation-component.component';
import { SwitchImplementaionChildComponent } from './switch-implementaion-child/switch-implementaion-child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgstyleDemoComponent } from './ng-style-tester/ng-style-tester.component';
SwitchImplementaionChildComponent
@NgModule({
  declarations: [                       // it always contains component names in the declarations
    AppComponent,
   StudentComponent,
    EmployeeComponent,
        EncapDemoComponent,
        SwitchImplementaionChildComponent,
        EmployeeListComponent,
        ReactiveFormsComponent,
        NgstyleDemoComponent
  ],
  imports: [
    BrowserModule,                        // it always contains module names in the imports 
    AppRoutingModule, Student2Module , FormsModule , ReactiveFormsModule
  ],
  providers: [],                      // it always contains service names in the providers                      
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
