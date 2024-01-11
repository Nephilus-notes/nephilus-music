import { Component } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

    buttonInfo: ButtonInfo = {
    id: 'testBioButton',
    type: 'link',
    text: 'Bio',
    url: '/bio',
    classes: 'movingBackgroundLeft button active navLink',
    title: 'Bio',
    ariaLabel: 'Link to bio page.'
  };
}
