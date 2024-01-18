import { Component } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
                ]
})
export class NavBarComponent {

  buttonText:string = "v"
isMenuOpen:boolean = false;

logoButtonInfo:ButtonInfo = {
  id: 'navBarLogoButton',
  type: 'link',
  text: 'Nephilus Music',
  url: '/',
  classes: 'movingBackgroundLeft button active homeLink',
  title: 'Charles McCall',
  ariaLabel: 'Branded link to home page.'
};

homeButtonInfo:ButtonInfo = {
  id: 'navBarHomeButton',
  type: 'link',
  text: 'Home',
  url: '/',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Home',
  ariaLabel: 'Link to home page.'
};

bioButtonInfo:ButtonInfo = {
  id: 'navBarBioButton',
  type: 'link',
  text: 'Bio',
  url: '/bio',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Bio',
  ariaLabel: 'Link to bio page.'
};

performancesButtonInfo:ButtonInfo = {
  id: 'navBarPerformancesButton',
  type: 'link',
  text: 'Events',
  url: '/performances',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Performances',
  ariaLabel: 'Link to performances page.'
};

listenOnlineButtonInfo:ButtonInfo = {
  id: 'navBarListenOnlineButton',
  type: 'link',
  text: 'Hear Me',
  url: '/listen-online',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Listen Online',
  ariaLabel: 'Link to listen online page.'
};

subscribeButtonInfo:ButtonInfo = {
  id: 'navBarSubscribeButton',
  type: 'link',
  text: 'Subscribe',
  url: '/subscribe',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Subscribe',
  ariaLabel: 'Link to subscribe page.'
};

requestButtonInfo:ButtonInfo = {
  id: 'navBarRequestButton',
  type: 'link',
  text: 'Requests',
  url: '/request',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Request',
  ariaLabel: 'Link to request page.'
};

testButtonInfo:ButtonInfo = {
  id: 'navBarTestButton',
  type: 'link',
  text: 'Test',
  url: '/test',
  classes: 'movingBackgroundLeft button active navLink',
  title: 'Test',
  ariaLabel: 'Test'
};


toggleMenu(): void {
  this.isMenuOpen = !this.isMenuOpen;
  if (!this.isMenuOpen) {
    this.buttonText = "v"
  } else {
    this.buttonText = "^"
  }
}

public closeMenu(): void {
  this.isMenuOpen = false;
  this.buttonText = "v"
}

}
