import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  preserveWhitespaces: true,
  viewProviders : [Employee]

})
export class StudentComponent {

}