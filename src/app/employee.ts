export interface Employee {
  id: number;
  name: string;
  role: string;
}


console.log("Employee Class is Loaded");
export class Employee {
    constructor() {
        console.log("Employee Class Object is Created by constructor");
    }
}
