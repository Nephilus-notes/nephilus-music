import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nephilus-music';
  lastIn: any = '';
  currentPage: any = '';
  timeSpentOnPages: any[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((val: any) => {
      let checking = 0;
      if (!this.currentPage) {
        this.currentPage = val.url;
        this.lastIn = Date.now();
        checking ++;
        console.log(checking)
      }
      if (this.currentPage !== val.url) {
        const timeSpent = Date.now() - this.lastIn;
        console.log(this.currentPage + ' timespent ' + timeSpent);
        const pageInfo = {
          pageUrl: this.currentPage,
          timeSpent,
        };
        checking ++;
        console.log(checking)
        this.timeSpentOnPages.push(pageInfo);
        this.lastIn = Date.now();
        this.currentPage = val.url;
      }
    });
  }
}
