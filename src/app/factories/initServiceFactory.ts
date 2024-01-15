import { RouterAnalyticsService } from "../services/routerAnalytics.service";

export function initServiceFactory(
    routerAnalyticsService: RouterAnalyticsService
    ) {
  return async () => {
     routerAnalyticsService.getIpAddressLocation()
    // routerAnalyticsService.check();
};
}