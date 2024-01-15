import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonInfo } from 'src/app/models/buttonInfo';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonInfo: ButtonInfo;

  beforeEach(() => {
    buttonInfo = {
      id: 'testButton',
      type: 'link',
      text: 'My Button',
      url: '/bio',
      classes: 'movingBackgroundLeft button active navLink',
      title: '',
      ariaLabel: 'Performance Dates'
    };
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.buttonInfo = buttonInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
