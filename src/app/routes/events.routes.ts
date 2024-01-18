import { Routes } from "@angular/router";
import { SingleEventComponent } from "../components/single-event/single-event.component";
import { EventViewerComponent } from "../views/event-viewer/event-viewer.component";


export const EVENT_ROUTES: Routes = [
    {
        path: '',
        component: EventViewerComponent,
        children: [

        {
            path: ':id',
            component: SingleEventComponent
        }
        ]
    }
    ];