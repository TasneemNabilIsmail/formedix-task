import { FlickerPhoto } from './../models/search-flicker.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flicker-cards-list',
  templateUrl: './flicker-cards-list.component.html',
  styleUrls: ['./flicker-cards-list.component.scss']
})
export class FlickerCardsListComponent implements OnInit {
@Input() searchList!:FlickerPhoto[]
  constructor() { }

  ngOnInit(): void {
  }
}
