import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './app-slider.component.html',
  styleUrls: ['./app-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppSliderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
