import { Injectable } from '@angular/core';
import { pageAnalytics } from '../models/pageAnalytics';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RouterAnalyticsService {
  pagesViewed: any = {};

  lastIn: number = 0;
  currentPage!: pageAnalytics;
  previousUrl!: string;
  currentUrl!: string;
  ip!: string;
  geolocation!: { city: string; country: string; state: string};

  setCurrentPage() {
    this.router.events.subscribe((event: any) => {
      // check if event is a scroll event (type 15) the final event in the Angular Router chain
      if (event instanceof NavigationEnd) {
        // console.log(event)
        // this.getIpAddressLocation();
        // create current page if it does not exis
        if (
          !this.currentPage ||
          this.pagesViewed[event.url] === undefined
        ) {
          this.createPageAnalyticsObject(event);
          // this.currentUrl = event.routerEvent.url;
        } else if (this.currentPage) {
          // if current page exists, add time spent on page to timeOnPage and add it to the cache
          this.currentPage.timeOnPage += Number(Date.now() - this.lastIn);

          // because page is in cache, increment views and set to currentPage
          this.pagesViewed[event.url].views++;
          this.currentPage = this.pagesViewed[event.url];
          // this.previousUrl = this.currentUrl;
          // this.currentUrl = event.routerEvent.url;
        }

        this.addPageToCache();
        console.log(this.pagesViewed);
        this.lastIn = Date.now();

        if (this.currentUrl) {
          this.cachePreviousPageUrl(event);
          this.cacheNextPageUrl(event);
        }

        this.setCurrentUrl(event);
        this.getIpAddressAndLocation();
      }
    });
  }

  public cachePreviousPageUrl(event: any) {
    this.previousUrl = this.currentUrl;
    this.pagesViewed[event.url].priorPages.push(this.previousUrl);
  }

  public cacheNextPageUrl(event: any) {
    this.pagesViewed[this.previousUrl].nextPages.push(event.url);
  }

  public setCurrentUrl(event: any) {
    this.currentUrl = event.url;
  }

  public createPageAnalyticsObject(event: any) {
    this.currentPage = {
      pageUrl: event.url,
      // pageName: val.url.split('/')[1],
      views: 1,
      uniqueViews: 1,
      timeOnPage: 0,
      priorPages: [],
      nextPages: [],
      ipAddress: this.ip ? this.ip : '',
      location: this.geolocation ? this.geolocation : undefined,
    };
  }

  public getIpAddressAndLocation() {
    // console.log('checking ip address')
    if (!this.ip) {
      // console.log('getting ip address')
      // other link https://myexternalip.com/json
      const url = 'https://myexternalip.com/json';
      let geoUrl = `${environment.IP_GEOLOCATION_ENDPOINT}?apiKey=${environment.IP_GEOLOCATION_API_KEY}&ip=`;
      // const url = 'https://api.ipify.org/?format=json';
      this.http.get(url).subscribe((response: any) => {
        // console.log(response.ip);
        this.ip = response.ip;
        geoUrl += response.ip;
        this.http.get(geoUrl).subscribe((response: any) => {
          this.geolocation = {
            city: response.city,
            country: response.country_name,
            state: response.state_prov
          }
          // console.log(response);
          this.addLocationAndIpToPage();
          return response;
        });
        return response.ip;
      });
    }
  }

  public addPageToCache() {
    this.pagesViewed[this.currentPage.pageUrl] = this.currentPage;
  }

  public addLocationAndIpToPage() {
    this.currentPage.ipAddress = this.ip;
    this.currentPage.location = this.geolocation;
  }

  public sendFirstLog() {
    this.apiService.sendAnalyticsBundle(this.pagesViewed, this.currentPage);
  }

  constructor(private router: Router, private http: HttpClient,private apiService: ApiService) {
    // this.setCurrentPage();
    console.log('Analytics starting')

  }
}
