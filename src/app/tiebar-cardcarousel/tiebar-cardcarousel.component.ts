import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-tiebar-cardcarousel',
  templateUrl: './tiebar-cardcarousel.component.html',
  styleUrls: ['./tiebar-cardcarousel.component.scss']
})
export class TiebarCardcarouselComponent implements OnInit, AfterViewInit {
  items: Array<object>;
  flick: any;

  constructor() {
    this.items = [
      {
        imgsrc: '/assets/images/pkmncard1.png',
        text: 'layer up'
      },
      {
        imgsrc: '/assets/images/pkmncard2.png',
        text: 'perfect accessories'
      },
      {
        imgsrc: '/assets/images/pkmncard3.png',
        text: 'powerful ties'
      },
      {
        imgsrc: '/assets/images/pkmncard4.png',
        text: 'fancy up'
      },
      {
        imgsrc: '/assets/images/pkmncard5.jpg',
        text: 'work casual'
      },
      {
        imgsrc: '/assets/images/pkmncard6.png',
        text: 'oh hey'
      },
      {
        imgsrc: '/assets/images/pkmncard7.png',
        text: 'its vulpix'
      },
      {
        imgsrc: '/assets/images/pkmncard8.png',
        text: 'how cool'
      }
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.flick = $('.main-carousel').flickity({
      cellAlign: 'left',
      contain: true,
      adaptiveHeight: false,
      wrapAround: false,
      imagesLoaded: true,
      groupCells: true,
      pageDots: false
    });

    $('.flickity-prev-next-button')
      .css('background-color', 'transparent');
    $('.flickity-prev-next-button.next')
      .css('margin-right', '-40px');
    $('.flickity-prev-next-button.previous')
      .css('margin-left', '-40px');
  }

}
