import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {


  public get(url: string) {
    return this.httpClient.get(url);
  }

  public post(url: string, body: any) {
    return this.httpClient.post(url, body);
  }

  public put(url: string, body: any) {
    return this.httpClient.put(url, body);
  }

  public delete(url: string) {
    return this.httpClient.delete(url);
  }

  constructor(private httpClient: HttpClient) { }
}
