import { Component, OnInit, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-rect-banner',
  templateUrl: './rect-banner.component.html',
  styleUrls: ['./rect-banner.component.scss']
})
export class RectBannerComponent implements OnInit {

  @Input() headertext: string;
  @Input() linktext: string;
  @Input() href: string;
  @Input() imgsrc: string;

  constructor() { }

  ngOnInit() {
    if (!this.headertext) {
      this.headertext = 'default';
    }
    if (!this.linktext) {
      this.linktext = 'default';
    }
  }

}
