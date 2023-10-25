import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventViewerComponent } from './views/event-viewer/event-viewer.component';
import { PageTemplateComponent } from './views/page-template/page-template.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { PressViewerComponent } from './views/press-viewer/press-viewer.component';
import { BioViewerComponent } from './views/bio-viewer/bio-viewer.component';
import { IndexComponent } from './views/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { IndexEventDisplayComponent } from './components/index-event-display/index-event-display.component';
import { EventDisplayComponent } from './components/event-display/event-display.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { BioDisplayComponent } from './components/bio-display/bio-display.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ButtonComponent } from './components/button/button.component';
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventViewerComponent,
    PageTemplateComponent,
    BasicButtonComponent,
    PressViewerComponent,
    BioViewerComponent,
    IndexComponent,
    HeroImageComponent,
    IndexEventDisplayComponent,
    EventDisplayComponent,
    EventListComponent,
    BioDisplayComponent,
    VideoPlayerComponent,
    ButtonComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
