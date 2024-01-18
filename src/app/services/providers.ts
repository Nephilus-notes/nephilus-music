import { environment } from "src/environments/environment";
import { ApiService } from "./api.service";
import { EnvironmentService } from "./environment.service";
import { RouterAnalyticsService } from "./routerAnalytics.service";
import { ButtonAnalyticsService } from "./button-analytics.service";


export const PROVIDERS = {
    ApiService,
    EnvironmentService,
    RouterAnalyticsService,
    ButtonAnalyticsService,
}