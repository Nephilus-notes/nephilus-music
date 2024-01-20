import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app/routes";
import { provideHttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { DatePipe } from "@angular/common";
import { PROVIDERS } from "./app/services/providers";
import { FACTORIES } from "./app/factories/factories";
import { AppComponent } from "./app/app.component";
import { RouterAnalyticsService } from "./app/services/routerAnalytics.service";
import { TrackingInterceptor } from "./app/http-interceptors/tracking.interceptor";
import { appConfig } from "./app/app.config";




bootstrapApplication(AppComponent, appConfig);
    
//     {
//     providers: [
//         provideRouter(routes, withComponentInputBinding()),
//         provideHttpClient(),
//         PROVIDERS.ApiService,
//         // PROVIDERS.RouterAnalyticsService,
//         PROVIDERS.EnvironmentService,
//         PROVIDERS.ButtonAnalyticsService,
//         {
//             provide: APP_INITIALIZER,
//             useFactory: (routerAnalyticsService: RouterAnalyticsService) => {
//                 return () => {
//                     routerAnalyticsService.setCurrentPage();
//                     return routerAnalyticsService;
//                 }
            
//             },
//             deps: [RouterAnalyticsService],
//             multi: true,
//         },
//         {
//             provide: HTTP_INTERCEPTORS, useClass: TrackingInterceptor, multi: true
//           }
//     ]

// });