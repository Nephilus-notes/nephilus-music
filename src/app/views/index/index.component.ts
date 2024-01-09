import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  // constructor(private logger:LoggerService) {}
  // ngOnInit(): void {
  //   // this.logger.logLocation();
  //   this.logger.apiLocationLog();
  // }
title= "Charles McCall - Dev and Creative"
musicUrlList: Array<string> = ["https://drive.google.com/file/d/1wD7Beul2z8LMgrgPnG33Ik0kuIuNKF1A/preview", "https://drive.google.com/file/d/1U9GbAlxaBik5ZilaQAfme1ARyUfLmU5e/preview"]
musicNameList: Array<string> = ["Everything But Desire", "Trouble You Can Borrow"] 
}
