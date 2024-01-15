import { Injectable } from '@angular/core';
import { pageAnalytics } from '../models/pageAnalytics';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  pagesViewed: any = {};

  lastIn: number = 0;
  currentPage!: pageAnalytics;
  previousUrl!: string;
  currentUrl!: string;

  setCurrentPage() {
    this.router.events.subscribe((event: any) => {
      // console.log(event)
      // check if event is a scroll event (type 15) the final event in the Angular Router chain
      if (event.type === 15) {
        // create current page if it does not exis
        if (
          !this.currentPage ||
          this.pagesViewed[event.routerEvent.url] === undefined
        ) {
          this.createPageAnalyticsObject(event);
          // this.currentUrl = event.routerEvent.url;
        } else if (this.currentPage) {
          // if current page exists, add time spent on page to timeOnPage and add it to the cache
          this.currentPage.timeOnPage += Number(Date.now() - this.lastIn);

            // because page is in cache, increment views and set to currentPage
            this.pagesViewed[event.routerEvent.url].views++;
            this.currentPage = this.pagesViewed[event.routerEvent.url];
            // this.previousUrl = this.currentUrl;
            // this.currentUrl = event.routerEvent.url;
          
        }
        
        this.addPageToCache();
        // console.log(this.pagesViewed);
        this.lastIn = Date.now();

        if(this.currentUrl) {
          this.cachePreviousPageUrl(event)
          this.cacheNextPageUrl(event)
        }

        this.setCurrentUrl(event)
      }
    });
  }

  private cachePreviousPageUrl(event: any) {
    this.previousUrl = this.currentUrl;
    this.pagesViewed[event.routerEvent.url].priorPages.push(this.previousUrl);
  }

  private cacheNextPageUrl(event: any) {
    this.pagesViewed[this.previousUrl].nextPages.push(event.routerEvent.url);
  }

  private setCurrentUrl(event:any){
    this.currentUrl = event.routerEvent.url;
  }

  private createPageAnalyticsObject(event: any) {
    this.currentPage = {
      pageUrl: event.routerEvent.url,
      // pageName: val.url.split('/')[1],
      views: 1,
      uniqueViews: 1,
      timeOnPage: 0,
      priorPages: [],
      nextPages: [],
      uniqueIpAddresses: [(this.getIpAddress())],
    };
  }

  getIpAddress(): string {
    return document.location.hostname;
  }

  private addPageToCache() {
    this.pagesViewed[this.currentPage.pageUrl] = this.currentPage;
  }

  constructor(private router: Router) {
    this.setCurrentPage();
  }
}
