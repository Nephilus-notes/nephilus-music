import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./routes";
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors,  } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { PROVIDERS } from "./services/providers";
import { RouterAnalyticsService } from "./services/routerAnalytics.service";
import { TrackingInterceptor } from "./http-interceptors/tracking.interceptor";
import { withComponentInputBinding } from "@angular/router";



export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(withInterceptors([TrackingInterceptor])),
        PROVIDERS.ApiService,
        // PROVIDERS.RouterAnalyticsService,
        PROVIDERS.EnvironmentService,
        PROVIDERS.ButtonAnalyticsService,
        {
            provide: APP_INITIALIZER,
            useFactory: (routerAnalyticsService: RouterAnalyticsService) => {
                return () => {
                    routerAnalyticsService.setCurrentPage();
                    return routerAnalyticsService;
                }
            
            },
            deps: [RouterAnalyticsService],
            multi: true,
        },
        // {
        //     provide: HTTP_INTERCEPTORS, useClass: TrackingInterceptor, multi: true
        //   }
    ]
}