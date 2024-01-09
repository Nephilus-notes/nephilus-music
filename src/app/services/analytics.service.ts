import { Injectable } from '@angular/core';
import { pageAnalytics } from '../models/pageAnalytics';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  pagesViewed: any = {};

  lastIn: any = '';
  currentPage!: pageAnalytics;
  timeSpentOnPages: any[] = [];

  setCurrentPage() {
    this.router.events.subscribe((event: any) => {
      // console.log(event)
      // check if event is a scroll event (type 15) the final event in the Angular Router chain
      if(event.type===15) {
    // let url = event.routerEvent.url;
        // create current page if it does not exis
        if (!this.currentPage) {
          // console.log('initializing current page')
          this.currentPage = {
            pageUrl: event.routerEvent.url,
            // pageName: val.url.split('/')[1],
            views: 1,
            uniqueViews: 1,
            timeOnPage: 0,
            priorPages: [],
            nextPages: [],
            uniqueIpAddresses: [],
          };
        } else if (this.currentPage) {
          // console.log('current page exists')
          // if current page exists, add time spent on page to timeOnPage and add it to the cache
          this.currentPage.timeOnPage += Number(Date.now() - this.lastIn);
            console.log(this.pagesViewed)
  
          

          // check if page is in cache
          if (this.pagesViewed[event.routerEvent.url] !== undefined) {
            // because page is in cache, increment views and set to currentPage
            this.pagesViewed[event.routerEvent.url].views++;
            this.currentPage = this.pagesViewed[event.routerEvent.url];
          } else {
            // because page is not in cache, set to currentPage
            this.currentPage = {
              pageUrl: event.routerEvent.url,
              // pageName: val.url.split('/')[1],
              views: 1,
              uniqueViews: 1,
              timeOnPage: 0,
              priorPages: [],
              nextPages: [],
              uniqueIpAddresses: [],
            };
          }
        }
        this.addPageToCache();
        this.lastIn = Date.now();
        // console.log(this.currentPage)
        // console.log(this.)
      }
      });
  }

  private addPageToCache() {
    this.pagesViewed[this.currentPage.pageUrl] = this.currentPage;
  }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      // instantiating new page analytics object
      this.setCurrentPage();
      console.log(this.currentPage);
      // console.log(this.pagesViewed);
    });
  }

  constructor(private router: Router) {
    this.setCurrentPage();
  }
}
