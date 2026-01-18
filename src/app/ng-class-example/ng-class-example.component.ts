// ng-class-example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent {
  
  // Example 1: Button Active/Inactive State
  isButtonActive = false;

  toggleButton() {
    this.isButtonActive = !this.isButtonActive;
  }

  // Example 2: Task Priority System
  tasks = [
    { name: 'Fix critical bug', priority: 'high', completed: false },
    { name: 'Update documentation', priority: 'low', completed: true },
    { name: 'Code review', priority: 'medium', completed: false },
    { name: 'Deploy to production', priority: 'high', completed: false }
  ];

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}