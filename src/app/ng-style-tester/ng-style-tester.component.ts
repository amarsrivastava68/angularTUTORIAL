import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle-demo',
  template: `
    <div class="container">
      <h2>NgStyle Examples in Angular</h2>

      <!-- Example 1: Single Style Property -->
      <div class="example-section">
        <h3>1. Simple Color Change</h3>
        <p [ngStyle]="{'color': textColor, 'font-size': '18px'}">
          This text color is dynamic: {{textColor}}
        </p>
        <button (click)="changeColor('red')">Red</button>
        <button (click)="changeColor('blue')">Blue</button>
        <button (click)="changeColor('green')">Green</button>
        <button (click)="changeColor('purple')">Purple</button>
      </div>

      <!-- Example 2: Multiple Dynamic Styles -->
      <div class="example-section">
        <h3>2. Font Size Control</h3>
        <p [ngStyle]="{'font-size.px': fontSize, 'font-weight': fontWeight}">
          Current font size: {{fontSize}}px
        </p>
        <button (click)="increaseFontSize()">Increase Size</button>
        <button (click)="decreaseFontSize()">Decrease Size</button>
        <button (click)="fontWeight = fontWeight === 'bold' ? 'normal' : 'bold'">
          Toggle Weight
        </button>
      </div>

      <!-- Example 3: Conditional Styles -->
      <div class="example-section">
        <h3>3. Toggle Highlight</h3>
        <div [ngStyle]="{
          'background-color': isHighlighted ? 'yellow' : 'white',
          'padding': isHighlighted ? '20px' : '10px',
          'border': isHighlighted ? '3px solid orange' : '1px solid gray',
          'transition': 'all 0.3s ease'
        }">
          <p>Click the button to toggle highlight</p>
        </div>
        <button (click)="toggleHighlight()">Toggle Highlight</button>
      </div>

      <!-- Example 4: Style Object -->
      <div class="example-section">
        <h3>4. Style Object</h3>
        <div [ngStyle]="boxStyles">
          This div uses a style object from the component
        </div>
      </div>

      <!-- Example 5: Progress Bar -->
      <div class="example-section">
        <h3>5. Progress Bar ({{progress}}%)</h3>
        <div class="progress-container">
          <div class="progress-bar" [ngStyle]="{
            'width.%': progress,
            'background-color': getProgressColor(),
            'transition': 'all 0.3s ease'
          }">
            {{progress}}%
          </div>
        </div>
        <input type="range" min="0" max="100" [value]="progress" 
               (input)="updateProgress(+$any($event.target).value)" />
      </div>

      <!-- Example 6: Temperature Indicator -->
      <div class="example-section">
        <h3>6. Temperature Indicator ({{temperature}}°C)</h3>
        <div class="temperature-box" [ngStyle]="{
          'background-color': getTemperatureColor(),
          'color': 'white',
          'transform': 'scale(' + (1 + temperature / 100) + ')',
          'transition': 'all 0.3s ease'
        }">
          {{temperature}}°C
        </div>
        <input type="range" min="-10" max="50" [value]="temperature"
               (input)="changeTemperature(+$any($event.target).value)" />
      </div>

      <!-- Example 7: Dynamic Box Size -->
      <div class="example-section">
        <h3>7. Dynamic Width & Height</h3>
        <div class="dynamic-box" [ngStyle]="{
          'width.px': boxWidth,
          'height.px': boxHeight,
          'background': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
          'transition': 'all 0.3s ease'
        }">
          {{boxWidth}}px × {{boxHeight}}px
        </div>
        <div>
          <label>Width: {{boxWidth}}px</label>
          <input type="range" min="100" max="400" [value]="boxWidth"
                 (input)="boxWidth = +$any($event.target).value" />
        </div>
        <div>
          <label>Height: {{boxHeight}}px</label>
          <input type="range" min="100" max="400" [value]="boxHeight"
                 (input)="boxHeight = +$any($event.target).value" />
        </div>
      </div>

      <!-- Example 8: Expression-based Styles -->
      <div class="example-section">
        <h3>8. Expression-based Styles</h3>
        <div *ngFor="let item of [1, 2, 3, 4, 5]; let i = index">
          <div class="item" [ngStyle]="{
            'background-color': i % 2 === 0 ? '#e3f2fd' : '#fff3e0',
            'padding': (10 + i * 5) + 'px',
            'margin-bottom': '10px',
            'border-left': (i + 1) * 2 + 'px solid ' + (i % 2 === 0 ? '#2196F3' : '#FF9800')
          }">
            Item {{item}} - Index {{i}}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    h2 {
      text-align: center;
      color: #333;
      margin-bottom: 30px;
    }

    .example-section {
      margin-bottom: 40px;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      border: 1px solid #ddd;
    }

    h3 {
      color: #555;
      margin-top: 0;
      border-bottom: 2px solid #4CAF50;
      padding-bottom: 10px;
    }

    button {
      margin: 5px;
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #45a049;
    }

    .progress-container {
      width: 100%;
      height: 30px;
      background-color: #e0e0e0;
      border-radius: 15px;
      overflow: hidden;
      margin: 10px 0;
    }

    .progress-bar {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .temperature-box {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: bold;
      margin: 20px 0;
    }

    .dynamic-box {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      margin: 20px 0;
    }

    input[type="range"] {
      width: 100%;
      margin: 10px 0;
    }

    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
      color: #555;
    }

    .item {
      border-radius: 4px;
    }
  `]
})
export class NgstyleDemoComponent {
  // Example 1: Simple color change
  textColor = 'blue';
  
  // Example 2: Multiple styles
  fontSize = 16;
  fontWeight = 'normal';
  
  // Example 3: Dynamic styles based on condition
  isHighlighted = false;
  
  // Example 4: Style object
  boxStyles = {
    'background-color': 'pink',
    'border': '2px solid #333',
    'padding': '20px',
    'border-radius': '8px'
  };
  
  // Example 5: Progress bar
  progress = 0;
  
  // Example 6: Temperature indicator
  temperature = 25;
  
  // Example 7: Dynamic width and height
  boxWidth = 200;
  boxHeight = 150;

  // Methods to change styles
  changeColor(color: string) {
    this.textColor = color;
  }

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    if (this.fontSize > 10) {
      this.fontSize -= 2;
    }
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  updateProgress(value: number) {
    this.progress = value;
  }

  changeTemperature(value: number) {
    this.temperature = value;
  }

  // Computed style method
  getTemperatureColor(): string {
    if (this.temperature < 10) return '#2196F3'; // Cold - Blue
    if (this.temperature < 20) return '#4CAF50'; // Cool - Green
    if (this.temperature < 30) return '#FF9800'; // Warm - Orange
    return '#f44336'; // Hot - Red
  }

  getProgressColor(): string {
    if (this.progress < 30) return '#f44336';
    if (this.progress < 70) return '#FF9800';
    return '#4CAF50';
  }

  updateBoxSize(width: number, height: number) {
    this.boxWidth = width;
    this.boxHeight = height;
  }
}