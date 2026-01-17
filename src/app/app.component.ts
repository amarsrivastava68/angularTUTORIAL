import { Component, HostListener } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  preserveWhitespaces: false,
  viewProviders : [Employee],
  template: `
  
<h1>parent</h1> <input type="text" #parentD (keyup) = '0'/>
<app-student [pData]="parentD.value">   </app-student>
<app-switch-implementaion-child [mode]="appMode"></app-switch-implementaion-child>
<app-employee-list [employees]="employeeList"></app-employee-list>

    
  `,
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

  setMode(mode: string) {
    this.appMode = mode;
  }
  

   employeeList: Employee[] = [
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Tester' },
    { id: 3, name: 'Charlie', role: 'Manager' }
  ];
  
}
