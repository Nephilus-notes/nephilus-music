import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { BioViewerComponent } from './views/bio-viewer/bio-viewer.component';
import { EventViewerComponent } from './views/event-viewer/event-viewer.component';
import { PressViewerComponent } from './views/press-viewer/press-viewer.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { SingleSongComponent } from './components/single-song/single-song.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { TestComponent } from './components/test/test.component';
import { EVENT_ROUTES } from './routes/events.routes';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bio', component: BioViewerComponent },
  { 
    path: 'performances', 
    // instead of component I use loadChildren to lazy load the module
    // import event routes.then(r => r.EVENT_ROUTES)
    // component: EventViewerComponent 
    loadChildren: () => EVENT_ROUTES

},
  { path: 'listen-online', component: PressViewerComponent},
  { path: 'song/:id', component: SingleSongComponent},
  { path: 'event/:id', component: SingleEventComponent},
  { path: 'admin', component: AdminViewComponent},
  { path: 'request', component: RequestFormComponent},
  { path: 'subscribe', component: SubscribeFormComponent},
  { path: 'test', component: TestComponent},
  { path: '**', component: IndexComponent}
];