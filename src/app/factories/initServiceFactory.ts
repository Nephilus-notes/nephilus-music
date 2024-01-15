import { RouterAnalyticsService } from "../services/routerAnalytics.service";

export function initServiceFactory(
    routerAnalyticsService: RouterAnalyticsService
    ) {
  return async () => {
    // routerAnalyticsService.setCurrentPage()
    // routerAnalyticsService.check();
};
}