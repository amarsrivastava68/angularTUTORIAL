import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-switch-implementaion-child',
  templateUrl: './switch-implementaion-child.component.html',
  styleUrls: ['./switch-implementaion-child.component.css']
})
export class SwitchImplementaionChildComponent {
@Input() mode!: string;
}

