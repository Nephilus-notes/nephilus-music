import { Injectable } from '@angular/core';
import { pageAnalytics } from '../models/pageAnalytics';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  pagesViewed: any = {};

  lastIn: any = '';
  currentPage!: pageAnalytics;
  timeSpentOnPages: any[] = [];

  setCurrentPage(routerEvent: any) {
    if (!this.currentPage && routerEvent.url !== undefined) {
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
    } else if (this.currentPage && routerEvent.url !== undefined) {
      this.currentPage.timeOnPage += Number(Date.now() - this.lastIn);
      if (this.currentPage.pageUrl !== undefined) {
        this.addPageToCache();
      }

      let pageInCache: boolean = false;
      let pageInCacheUrl: string = '';
      for (let page of this.pagesViewed) {
        if (page.pageUrl === routerEvent.url) {
          pageInCache = true;
          pageInCacheUrl = page.pageUrl;
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
        console.log(pageInCache + ' is pageInCache' + pageInCacheUrl + ' is pageInCacheUrl')
        this.currentPage = this.pagesViewed[pageInCacheUrl];
        this.currentPage.views++;
      }
    }
    this.lastIn = Date.now();
  }

  private addPageToCache() {
    this.pagesViewed[this.currentPage.pageUrl] = this.currentPage;
  }

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      // instantiating new page analytics object
      this.setCurrentPage(val);
      // console.log(this.currentPage)
      console.log(this.pagesViewed);
    });
  }
}
