import { Component, OnInit } from '@angular/core';
import { FlickerPhoto } from './models/search-flicker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fliker-api-task';

  searchList: FlickerPhoto[] = [];
  page = 1;
  ngOnInit(): void {}

  getSearchList($event: FlickerPhoto[]): void {
    if ($event) {
      this.searchList = [...this.searchList, ...$event];
    } else {
      this.searchList = [];
    }
  }

  onScrollDown($event: any): void {
    this.page++;
  }
}
