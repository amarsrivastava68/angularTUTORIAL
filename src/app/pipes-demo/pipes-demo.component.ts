import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  rating: number;
  addedDate: Date;
}

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  // String data
  text: string = 'hello world';
  longText: string = 'This is a very long text that needs to be truncated for display abcd abcdpurposes.';
  searchTerm: string = 'Angular';
  searchableText: string = 'Angular is a powerful framework for building Angular applications.';

  // Number data
  price: number = 1234.010;
  percentage: number = 0.759;
  largeNumber: number = 1234567.89;

  // Date data
  today: Date = new Date();
  customDate: Date = new Date('2024-01-15');
  recentDate: Date = new Date(Date.now() - 2 * 60 * 60 * 1000); // 2 hours ago

  // Currency data
  amount: number = 9999.99;
  salary: number = 75000;

  // Array/Object data
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true, rating: 4.5, addedDate: new Date('2024-01-10') },
    { id: 2, name: 'Mouse', price: 25.50, category: 'Accessories', inStock: true, rating: 4.0, addedDate: new Date('2024-01-12') },
    { id: 3, name: 'Keyboard', price: 75.00, category: 'Accessories', inStock: false, rating: 4.8, addedDate: new Date('2024-01-08') },
    { id: 4, name: 'Monitor', price: 299.99, category: 'Electronics', inStock: true, rating: 4.3, addedDate: new Date('2024-01-05') },
    { id: 5, name: 'Webcam', price: 89.99, category: 'Electronics', inStock: false, rating: 3.9, addedDate: new Date('2024-01-15') }
  ];

  // JSON data
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

  // Async data (simulating Observable)
  asyncMessage: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded after 2 seconds!'), 2000);
  });

  // Slice data
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

  // Sort/Filter state
  sortBy: string = 'name';
  filterCategory: string = '';

  // Methods
  getSortedProducts(): Product[] {
    return [...this.products].sort((a, b) => {
      if (this.sortBy === 'name') return a.name.localeCompare(b.name);
      if (this.sortBy === 'price') return a.price - b.price;
      if (this.sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }

  getFilteredProducts(): Product[] {
    if (!this.filterCategory) return this.products;
    return this.products.filter(p => p.category === this.filterCategory);
  }
}