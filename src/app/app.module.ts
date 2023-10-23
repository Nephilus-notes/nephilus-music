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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventViewerComponent,
    PageTemplateComponent,
    BasicButtonComponent,
    PressViewerComponent,
    BioViewerComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
