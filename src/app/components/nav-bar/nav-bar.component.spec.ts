import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';



import { NavBarComponent } from './nav-bar.component';
import { Router } from '@angular/router';

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
      declarations: [NavBarComponent], // will I need to import the other components?
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
  it('should have a link to /bio', () => {
    const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('a').textContent).toContain('bio');
    pending();
  });
  it('should have a link to performances that is called Events', () => {
    const compiled = fixture.nativeElement;
    // create a new variable for the performances link that searches for the id performancesLink

    let performancesLink = fixture.debugElement.query(By.css('#performancesLink')).nativeElement;
    // const el = fixture.debugElement.nativeElement;

    // let performancesLink = el.query(By.css('performancesLink')).nativeElement;

    expect(performancesLink.textContent).toContain('Events');


    // let performancesLink = fixture.debugElement.query(By.css('performancesLink')).nativeElement;

    // let performancesLink = fixture.debugElement.query(By.css('performancesLink')).nativeElement;
    // expect(compiled.querySelector('a').textContent).toContain(
    //   'performances'
    // );
  });
  it('should have a link to listen-online', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain(
      'Listen Online'
    );
    pending();
  });
});
