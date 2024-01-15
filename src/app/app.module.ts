import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EventViewerComponent } from './views/event-viewer/event-viewer.component';
import { PageTemplateComponent } from './views/page-template/page-template.component';
import { PressViewerComponent } from './views/press-viewer/press-viewer.component';
import { BioViewerComponent } from './views/bio-viewer/bio-viewer.component';
import { IndexComponent } from './views/index/index.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { BioDisplayComponent } from './components/bio-display/bio-display.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ButtonComponent } from './components/button/button.component';
import { GithubComponent } from './components/github/github.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { RsvpFormComponent } from './components/rsvp-form/rsvp-form.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { SinglePatronComponent } from './components/single-patron/single-patron.component';
import { SingleSongComponent } from './components/single-song/single-song.component';
import { SingleSetlistComponent } from './components/single-setlist/single-setlist.component';
import { SongListComponent } from './components/song-list/song-list.component';
import { PatronListComponent } from './components/patron-list/patron-list.component';
import { SetListListComponent } from './components/set-list-list/set-list-list.component';
import { CardComponent } from './components/card/card.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { UpcomingPipe } from './pipes/upcoming.pipe';
import { KnownPipe } from './pipes/known.pipe';
import { TestComponent } from './components/test/test.component';
import { initServiceFactory } from './factories/initServiceFactory';
import { RouterAnalyticsService } from './services/routerAnalytics.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventViewerComponent,
    PageTemplateComponent,
    PressViewerComponent,
    BioViewerComponent,
    IndexComponent,
    HeroImageComponent,
    EventListComponent,
    BioDisplayComponent,
    VideoPlayerComponent,
    ButtonComponent,
    GithubComponent,
    // RequestFormComponent,
    EventFormComponent,
    RsvpFormComponent,
    AdminViewComponent,
    SingleEventComponent,
    SinglePatronComponent,
    SingleSongComponent,
    SingleSetlistComponent,
    SongListComponent,
    PatronListComponent,
    SetListListComponent,
    CardComponent,
    FooterComponent,
    SortByDatePipe,
    UpcomingPipe,
    KnownPipe,
    TestComponent,
    // SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initServiceFactory,
      deps: [RouterAnalyticsService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
