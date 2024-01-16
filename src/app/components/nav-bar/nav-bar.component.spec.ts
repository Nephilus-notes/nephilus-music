import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';



import { NavBarComponent } from './nav-bar.component';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'bio', component: NavBarComponent },
        { path: 'performances', component: NavBarComponent },
        { path: 'listen-online', component: NavBarComponent },
      ])],
      declarations: [NavBarComponent, ButtonComponent], // will I need to import the other components?
    }).compileComponents();

    // router = TestBed.inject(Router);
    // location = TestBed.inject(Location);

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    // MENU TOGGLE TESTS //
  it('should toggle the menu', () => {
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
    expect(component.buttonText).toEqual('^');
    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
    expect(component.buttonText).toEqual('v');
  });

  it('should close the menu', () => {
    component.closeMenu();
    expect(component.isMenuOpen).toBeFalse();
    expect(component.buttonText).toEqual('v');
  });

  // it('should navigate to /bio', 
  // waitForAsync(inject([Router, Location], (router: Router, location: Location) => {
  //   const fixture = TestBed.createComponent(NavBarComponent);
  //   fixture.detectChanges();

  //   fixture.debugElement.query(By.css('a')).nativeElement.click();
  //   fixture.whenStable().then(() => {
  //     expect(location.path()).toEqual('/settings/testing/edit/1');
  //   });
  // })));
    // router = TestBed.inject(Router);
    // location = TestBed.inject(Location);

    // const nagivateSpy = spyOn(router, 'navigate');

    // // component.navigateToBio();
    // router.navigate(['/bio']);
    // expect(location.path()).toBe('/bio');

    // BIO LINK TESTS //
  it('should have a button that says Bio', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('#navBarBioButton').textContent).toContain('Bio');
  });

  it('should have a link to bio that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarBioButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to bio with the aria label "Link to bio page."', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('#navBarBioButton').getAttribute('aria-label')).toContain('Link to bio page.');
  });

  it('should have a link to bio that has a title of "Bio"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarBioButton').getAttribute('title')).toContain(
      'Bio'
    );
  });

  it('should have a link that navigates to /bio', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarBioButton').getAttribute('href')).toContain(
      '/bio'
    );
  });

  it('should have a link to bio that has the id navBarBioButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarBioButton').getAttribute('id')).toContain(
      'navBarBioButton'
    );
  });

  it('should have a link to bio that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarBioButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });



  // EVENTS LINK TESTS //
  it('should have a link to performances that is called Events', () => {
    const compiled = fixture.nativeElement;
    // create a new variable for the performances link that searches for the id performancesLink

    let performancesLink = compiled.querySelector('#navBarPerformancesButton').textContent;

    expect(performancesLink).toContain('Events');

  });

  it('should have a link to performances that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to performances with the aria label "Link to performances page."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').getAttribute('aria-label')).toContain(
      'Link to performances page.'
    );
  });

  it('should have a link to performances that has a title of "Performances"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').getAttribute('title')).toContain(
      'Performances'
    );
  });

  it('should have a link that navigates to /performances', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').getAttribute('href')).toContain(
      '/performances'
    );
  });

  it('should have a link to performances that has the id navBarPerformancesButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').getAttribute('id')).toContain(
      'navBarPerformancesButton'
    );
  });

  it('should have a link to performances that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarPerformancesButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });



  // LISTEN ONLINE LINK TESTS //
  it('should have a link to listen-online called Hear Me', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').textContent).toContain(
      'Hear Me'
    );
  });

  it('should have a link to listen-online that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to my listen online section with the aria label "Link to listen online page."', () => {

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').getAttribute('aria-label')).toContain(
      'Link to listen online page.'
    );
  });

  it('should have a link to listen-online that has a title of "Listen Online"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').getAttribute('title')).toContain(
      'Listen Online'
    );
  });

  it('should have a link that navigates to /listen-online', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').getAttribute('href')).toContain(
      '/listen-online'
    );
  });

  it('should have a link to listen-online that has the id navBarListenOnlineButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').getAttribute('id')).toContain(
      'navBarListenOnlineButton'
    );
  });

  it('should have a link to listen-online that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarListenOnlineButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });

  // SUBSCRIBE LINK TESTS //
  it('should have a link to subscribe called Subscribe', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').textContent).toContain(
      'Subscribe'
    );
  });

  it('should have a link to subscribe that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to subscribe with the aria label "Link to subscribe page."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').getAttribute('aria-label')).toContain(
      'Link to subscribe page.'
    );
  });

  it('should have a link to subscribe that has a title of "Subscribe"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').getAttribute('title')).toContain(
      'Subscribe'
    );
  });

  it('should have a link that navigates to /subscribe', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').getAttribute('href')).toContain(
      '/subscribe'
    );
  });

  it('should have a link to subscribe that has the id navBarSubscribeButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').getAttribute('id')).toContain(
      'navBarSubscribeButton'
    );
  });

  it('should have a link to subscribe that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarSubscribeButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });

  // REQUEST LINK TESTS //
  it('should have a link to request called Requests', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').textContent).toContain(
      'Requests'
    );
  });

  it('should have a link to request with the aria label "Link to request page."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').getAttribute('aria-label')).toContain(
      'Link to request page.'
    );
  });

  it('should have a link to request that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to request that has a title of "Request"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').getAttribute('title')).toContain(
      'Request'
    );
  });

  it('should have a link that navigates to /request', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').getAttribute('href')).toContain(
      '/request'
    );
  });

  it('should have a link to request that has the id navBarRequestButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').getAttribute('id')).toContain(
      'navBarRequestButton'
    );
  });

  it('should have a link to request that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarRequestButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });


  // HOME LINK TESTS //
  it('should have a link to home called Home', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').textContent).toContain(
      'Home'
    );
  });

  it('should have a link to home that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').classList).toContain(
      'active'
    );
  });

  it('should have a link to home with the aria label "Link to home page."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').getAttribute('aria-label')).toContain(
      'Link to home page.'
    );
  });

  it('should have a link to home that has a title of "Home"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').getAttribute('title')).toContain(
      'Home'
    );
  });

  it('should have a link that navigates to /', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').getAttribute('href')).toContain(
      '/'
    );
  });

  it('should have a link to home that has the id navBarHomeButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').getAttribute('id')).toContain(
      'navBarHomeButton'
    );
  });

  it('should have a link to home that has the class movingBackgroundLeft button active navLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#navBarHomeButton').getAttribute('class')).toContain(
      'active button movingBackgroundLeft navLink'
    );
  });

  // LOGO LINK TESTS //
  it('should have a link called Charles McCall', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain(
      'Nephilus Music'
    );
  });

  it('should have a logo link that is active', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').classList).toContain(
      'active'
    );
  });

  it('should have a logo link with the aria label "Branded link to home page."', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').getAttribute('aria-label')).toContain(
      'Branded link to home page.'
    );
  });

  it('should have a logo link that has a title of "Charles McCall"', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').getAttribute('title')).toContain(
      'Charles McCall'
    );
  });

  it('should have a link that navigates to /', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').getAttribute('href')).toContain(
      '/'
    );
  });

  it('should have a logo link that has the id navBarLogoButton', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').getAttribute('id')).toContain(
      'navBarLogoButton'
    );
  });

  it('should have a logo link that has the class movingBackgroundLeft button active homeLink', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').getAttribute('class')).toContain(
      'active button homeLink movingBackgroundLeft'
    );
  });


});
