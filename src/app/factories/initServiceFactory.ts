import { timer } from "rxjs";
import { RouterAnalyticsService } from "../services/routerAnalytics.service";
import { TimerService } from "../services/timer.service";

export function initServiceFactory(
    routerAnalyticsService: RouterAnalyticsService,
    timerService: TimerService,
    ) {
  return async () => {
    //  routerAnalyticsService.getIpAddressLocation()
     console.log('initServiceFactory');
     timerService.sendFirstLog(timerService.apiService.sendAnalyticsBundle)
    // routerAnalyticsService.check();
};
}