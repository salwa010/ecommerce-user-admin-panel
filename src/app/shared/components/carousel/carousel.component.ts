import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, CarouselModule, ProductCardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnChanges {
  @Input() items: number = 3;
  @Input() products: any[] = [];

  customOptions: OwlOptions = this.buildOptions();

  private buildOptions(): OwlOptions {
    return {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      margin: 16,
      navText: ['Prev', 'Next'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: this.items
        },
        1000: {
          items: this.items
        }
      },
      nav: true
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.customOptions = this.buildOptions();
    }
  }
}
