import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./app/routes";
import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { DatePipe } from "@angular/common";
import { PROVIDERS } from "./app/services/providers";
import { FACTORIES } from "./app/factories/factories";
import { AppComponent } from "./app/app.component";
import { RouterAnalyticsService } from "./app/services/routerAnalytics.service";



bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideHttpClient(),
        PROVIDERS.ApiService,
        PROVIDERS.RouterAnalyticsService,
        PROVIDERS.EnvironmentService,
        PROVIDERS.ButtonAnalyticsService,
        {
            provide: APP_INITIALIZER,
            useFactory: (routerAnalyticsService: RouterAnalyticsService) => {
                return () => {
                    routerAnalyticsService.setCurrentPage();
                    
                    // console.log("APP_INITIALIZER");
                    // console.log(routerAnalyticsService.router)
                    // routerAnalyticsService.setCurrentPage();
                    // routerAnalyticsService.sendFirstLog();
                    // console.log(routerAnalyticsService.router)
                    return routerAnalyticsService;
                }
            
            },
            deps: [RouterAnalyticsService],
            multi: true,
        }
    ]

});