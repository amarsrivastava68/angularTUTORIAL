import { Component, Input } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List (trackBy demo)</h2>

    <button (click)="addEmployee()">Add Employee</button>
    <button (click)="shuffleEmployees()">Shuffle</button>

    <ul>
      <li *ngFor="let emp of employees; trackBy: trackByEmpId">
        <strong>{{ emp.name }}</strong> — {{ emp.role }}
        <input placeholder="Type here to test DOM reuse">
      </li>
    </ul>
  `
})
export class EmployeeListComponent {

  @Input() employees: Employee[] = [];

  trackByEmpId(index: number, emp: Employee): number {
    return emp.id;
  }

  addEmployee() {
    const id = this.employees.length + 1;
    this.employees = [
      ...this.employees,
      { id, name: `Employee ${id}`, role: 'Developer' }
    ];
  }

  shuffleEmployees() {
    this.employees = [...this.employees].sort(() => Math.random() - 0.5);
  }
}
