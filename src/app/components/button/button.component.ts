import { Component, Input } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonInfo!: ButtonInfo;

  @Input() id!:string;

  ngOnChanges(): void {
    if(!this.id) {
      this.id = this.buttonInfo.id;
    }
  }


  // buttonInfo: ButtonInfo = {
  //   id: 'testButton',
  //   type: 'link',
  //   text: 'My Button',
  //   url: '/bio',
  //   classes: 'movingBackgroundLeft button active navLink',
  //   title: '',
  //   ariaLabel: 'Performance Dates'
  // };

}
