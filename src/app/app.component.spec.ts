import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, NavBarComponent, FooterComponent, ButtonComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nephilus-music'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nephilus-music');
  });

  // it('should render title', () => {
  //   // const fixture = TestBed.createComponent(AppComponent);
  //   // fixture.detectChanges();
  //   // const compiled = fixture.nativeElement as HTMLElement;
  //   // expect(compiled.querySelector('.content span')?.textContent).toContain('nephilus-music app is running!');
  //   pending();
  // });
});
