import { Injectable } from '@angular/core';
import { pageAnalytics } from '../models/pageAnalytics';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  pagesViewed: any[] = [];

  lastIn: any = '';
  currentPage!: pageAnalytics;
  timeSpentOnPages: any[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      // instantiating new page analytics object
      this.setCurrentPage(val);

      // checking if the page is now different from the last page
      if (this.currentPage !== val.url) {
        const timeSpent = Date.now() - this.lastIn;
        // console.log(this.currentPage + ' timespent ' + timeSpent);
        this.currentPage.timeOnPage += timeSpent;
        console.log(this.currentPage);

        // checking ++;
        // console.log(checking)
        this.lastIn = Date.now();
      }
    });
  }

  setCurrentPage(routerEvent: any) {
    if (!this.currentPage) {
      this.currentPage = {
        pageUrl: routerEvent.url,
        // pageName: val.url.split('/')[1],
        views: 1,
        uniqueViews: 1,
        timeOnPage: 0,
        priorPages: [],
        nextPages: [],
        uniqueIpAddresses: [],
      };
    } else {
      this.currentPage.timeOnPage += Number(Date.now() - this.lastIn);
      this.pagesViewed.push(this.currentPage);

      let pageInCache: boolean = false;
      let pageInCacheIndex: number = 0;
      for (let index in this.pagesViewed) {
        if (this.pagesViewed[index].pageUrl === routerEvent.url) {
          pageInCache = true;
          pageInCacheIndex = Number(index);
        }
      }

      if (!pageInCache) {
        this.currentPage = {
          pageUrl: routerEvent.url,
          // pageName: val.url.split('/')[1],
          views: 1,
          uniqueViews: 1,
          timeOnPage: 0,
          priorPages: [],
          nextPages: [],
          uniqueIpAddresses: [],
        };
      } else if (pageInCache) {
        this.currentPage = this.pagesViewed[pageInCacheIndex];
        this.currentPage.views++;
      }
    }
    this.lastIn = Date.now();
  }
}
