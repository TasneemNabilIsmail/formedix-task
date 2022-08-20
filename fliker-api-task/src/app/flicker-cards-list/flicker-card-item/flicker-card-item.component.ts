import { FlickerPhoto } from './../../models/search-flicker.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flicker-card-item',
  templateUrl: './flicker-card-item.component.html',
  styleUrls: ['./flicker-card-item.component.scss'],
})
export class FlickerCardItemComponent implements OnInit {
  @Input() searchItem!: FlickerPhoto;
  isActive = false;
  constructor() {}

  ngOnInit(): void {}
}
