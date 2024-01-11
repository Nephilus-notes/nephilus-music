import { Component, Input } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() URl!: string;
  @Input() text!: string;
  @Input() buttonInfo!: ButtonInfo;


}
