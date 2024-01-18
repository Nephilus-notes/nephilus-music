import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { routes } from "./routes";
import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER } from "@angular/core";
import { DatePipe } from "@angular/common";
import { PROVIDERS } from "./services/providers";
import { FACTORIES } from "./factories/factories";



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
            useFactory: () => FACTORIES.initServiceFactory,
            deps: [PROVIDERS.RouterAnalyticsService],
            multi: true,
        }
    ]

});