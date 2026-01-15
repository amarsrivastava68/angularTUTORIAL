import { Component, HostListener } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  preserveWhitespaces: false,
  viewProviders : [Employee],
  template: `
  <h1>hello</h1>  <h2>hi</h2>
    
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

  @HostListener('click' , ['$event'])
  show ()
  {
    alert("hello this is host listener trial ")
  }
  
  constructor(private obj : Employee)
  {

  }
}
