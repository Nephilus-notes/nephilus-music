import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';
import { ButtonAnalyticsService } from 'src/app/services/button-analytics.service';

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

  @Output() buttonClick = new EventEmitter<boolean>();
  logButtonClick() {
    this.buttonAnalyticsService.logButtonClick(this.buttonInfo);
    if (this.buttonInfo.type === 'info') {
      this.buttonClick.emit(true);
    }
  }

constructor(private buttonAnalyticsService: ButtonAnalyticsService) { }
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
