import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { BioViewerComponent } from './views/bio-viewer/bio-viewer.component';
import { EventViewerComponent } from './views/event-viewer/event-viewer.component';
import { PressViewerComponent } from './views/press-viewer/press-viewer.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { SingleSongComponent } from './components/single-song/single-song.component';
import { SinglePatronComponent } from './components/single-patron/single-patron.component';
import { SingleSetlistComponent } from './components/single-setlist/single-setlist.component';
import { SingleEventComponent } from './components/single-event/single-event.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'bio', component: BioViewerComponent },
  { path: 'performances', component: EventViewerComponent },
  { path: 'listen-online', component: PressViewerComponent},
  { path: 'song/:id', component: SingleSongComponent},
  { path: 'patron/:id', component: SinglePatronComponent},
  { path: 'setlist/:id', component: SingleSetlistComponent},
  { path: 'event/:id', component: SingleEventComponent},
  { path: 'admin', component: AdminViewComponent},
  { path: 'request', component: RequestFormComponent},
  { path: 'subscribe', component: SubscribeFormComponent},
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
