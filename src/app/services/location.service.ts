import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  logLocation(): void {
    console.log(window.location.href);
  }
  apiLocationLog(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.showPosition,
        this.showError
      );
    } else {
      console.log('geolocation not available');
    }
  }

  showPosition(position: any): void {
    // console.log(position.coords.latitude, position.coords.longitude, position.coords.accuracy, position)
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let acc = position.coords.accuracy;
  }
  showError(error: any): void {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.TIMEOUT:
        alert('The request to get user location timed out.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
      default:
        alert('An unknown error occurred.');

        console.log(error);
    }
  }
}
