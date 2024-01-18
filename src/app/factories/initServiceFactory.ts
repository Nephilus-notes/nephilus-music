import { timer } from "rxjs";
import { RouterAnalyticsService } from "../services/routerAnalytics.service";

export function initServiceFactory(
    routerAnalyticsService: RouterAnalyticsService,
    ) {
  return async () => {
    //  routerAnalyticsService.getIpAddressLocation()
     console.log('initServiceFactory');
    //  timerService.sendFirstLog(timerService.apiService.sendAnalyticsBundle)
    routerAnalyticsService.sendFirstLog();
};
}