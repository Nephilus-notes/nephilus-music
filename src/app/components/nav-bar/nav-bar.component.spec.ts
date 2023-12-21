import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the menu', () => {
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
    expect(component.buttonText).toEqual("^");
    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
    expect(component.buttonText).toEqual("v");
  })

  it('should close the menu', () => {
    component.closeMenu();
    expect(component.isMenuOpen).toBeFalse();
    expect(component.buttonText).toEqual("v");
  })
});
