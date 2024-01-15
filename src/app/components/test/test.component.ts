import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonInfo } from 'src/app/models/buttonInfo';
import { ButtonAnalyticsService } from 'src/app/services/button-analytics.service';
import { RouterAnalyticsService } from 'src/app/services/routerAnalytics.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(private buttonAnalyticsService: ButtonAnalyticsService, 
    private routerAnalyticsService: RouterAnalyticsService,
     private http: HttpClient) { }

  ip:string = '';
  public logAnalytics() {
    console.log(this.buttonAnalyticsService.buttonAnalyticsCache);
    console.log(this.routerAnalyticsService.pagesViewed);
    // this.getIpAddressLocation();
    // this.getLocation();
  }

  private getIpAddressLocation() {
    // other link https://myexternalip.com/json
    const url = 'https://myexternalip.com/json';
    let geoUrl = `${environment.IP_GEOLOCATION_ENDPOINT}?apiKey=${environment.IP_GEOLOCATION_API_KEY}&ip=`;
    // const url = 'https://api.ipify.org/?format=json';
    this.http.get(url).subscribe((response: any) => {
      console.log(response.ip);
      geoUrl += response.ip;
      this.http.get(geoUrl).subscribe((response: any) => {
        console.log(response);
        return response;
      });
      return response.ip;
    });
  }

  // private getLocation() {
  //   let ip = this.getIpAddress();
  //   const geoUrl = `${environment.IP_GEOLOCATION_ENDPOINT}?apiKey=${environment.IP_GEOLOCATION_API_KEY}&ip=${ip}`;
  //   this.http.get(url).subscribe((response: any) => {
  //     console.log(response);
  //     return response;
  //   });
  // }


    buttonInfo: ButtonInfo = {
    id: 'testAnalyticsButton',
    type: 'info',
    text: 'Check Analytics',
    url: '',
    classes: 'movingBackgroundLeft button active navLink',
    title: 'Analytics',
    ariaLabel: 'See page and button analytics for this session'
  };
}
