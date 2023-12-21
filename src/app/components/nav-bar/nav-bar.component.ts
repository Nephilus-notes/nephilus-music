import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
                ]
})
export class NavBarComponent {

  buttonText:string = "v"
isMenuOpen:boolean = false;


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
