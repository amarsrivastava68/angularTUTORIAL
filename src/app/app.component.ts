import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div [class]="theme">
      <h1>Welcome to {{ title }}</h1>
      <div style="margin-top:10px">
        <button (click)="setTheme('light')">Light Pink</button>
        <button (click)="setTheme('dark')">Dark Pink</button>
        <button (click)="setTheme('more-dark')">More Dark Pink</button>
      </div>
      <app-student></app-student>
    </div>
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
  
}
