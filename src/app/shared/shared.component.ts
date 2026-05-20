import { ProductCardComponent } from './components/product-card/product-card.component';
import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';

@Component({
  selector: 'app-shared',
  imports: [CarouselComponent, ProductCardComponent],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.scss'
})
export class SharedComponent {

}
