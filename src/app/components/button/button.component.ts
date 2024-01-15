import { Component, Input } from '@angular/core';
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

  logButtonClick() {
    this.buttonAnalyticsService.logButtonClick(this.buttonInfo);
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
