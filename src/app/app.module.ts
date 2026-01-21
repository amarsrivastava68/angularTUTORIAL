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
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { ReverseTextPipe } from './pipes/reverse-text.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightPipe } from './pipes/highlight.pipe'


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
    NgstyleDemoComponent,
    NgClassExampleComponent,
    
    PhoneFormatPipe,
    ReverseTextPipe,
    FileSizePipe,
    FilterByCategoryPipe,
    PipesDemoComponent,
    CapitalizePipe,
    TruncatePipe,
    TimeAgoPipe,
    HighlightPipe
  ],
  imports: [
    BrowserModule,                        // it always contains module names in the imports 
    AppRoutingModule, 
    Student2Module,
     FormsModule,
     ReactiveFormsModule
  ],
  providers: [],                      // it always contains service names in the providers                      
  bootstrap: [AppComponent]
})
export class AppModule {

}
