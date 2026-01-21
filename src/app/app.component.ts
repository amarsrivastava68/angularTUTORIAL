import { Component, HostListener } from '@angular/core';
import { Employee } from './employee';
import { StudentComponent } from './student/student.component';
@Component({
  selector: 'app-root',
  preserveWhitespaces: false,
  viewProviders : [Employee],
  templateUrl: './app.component.html',
  styles: [`
    .light h1 { background-color: #ffd6e7; color: #000; padding: 8px; }
    .dark h1 { background-color: #ff73a6; color: #fff; padding: 8px; }
    .more-dark h1 { background-color: #ff2b6d; color: #fff; padding: 8px; }
    button { margin-right:8px; }
  `]
})
export class AppComponent {
 
  title = 'myfirstapp';
  theme: 'light' | 'dark' | 'more-dark' = 'light';

  setTheme(t: 'light' | 'dark' | 'more-dark') {
    this.theme = t;
  }

  // @HostListener('click' , ['$event'])
  // show ()
  // {
  //   alert("hello this is host listener trial ")
  // }

  appMode: string = 'help';

  normalInput:string = 'hello';

  setMode(mode: string) {
    this.appMode = mode;
  }
  

  updateNormalInput(event: Event): void {
  this.appMode = (event.target as HTMLInputElement).value;
}
   employeeList: Employee[] = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Tester' },
    { id: 3, name: 'Charlie', role: 'Manager' }
  ];
  
}
