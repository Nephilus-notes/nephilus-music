import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterAnalyticsService } from './services/routerAnalytics.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RouterAnalyticsService]
})
export class AppComponent {
  title = 'nephilus-music';
 
}
